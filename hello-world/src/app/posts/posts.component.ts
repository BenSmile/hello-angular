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
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }

  public createPost(input: HTMLInputElement): void {
    const post = {title: input.value};
    input.value = '';
    this.postService.createPost(post)
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
      });
  }

  public updatePost(post): void {
    this.postService.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  public deletePost(post): void {
    this.postService.deletePost(post)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
