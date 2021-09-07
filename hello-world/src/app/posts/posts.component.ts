import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll()
      .subscribe(response => {
        this.posts = response;
      });
  }

  public createPost(input: HTMLInputElement): void {
    const post = {title: input.value};
    input.value = '';
    this.posts.splice(0, 0, post);
    this.postService.create(post)
      .subscribe(response => {
        post['id'] = response['id'];
      }, error => {
        this.posts.splice(0, 1);
      });
  }

  public updatePost(post): void {
    this.postService.update(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  public deletePost(post): void {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.postService.delete(post)
      .subscribe(null, error => {
        this.posts.splice(index, 0, post);
      });
  }
}
