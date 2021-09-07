import {Component, OnInit} from '@angular/core';
import {FollowersService} from '../services/followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any = [];


  constructor(private followersService: FollowersService) {
  }

  ngOnInit(): void {

    this.followersService.getAll()
      .subscribe(response => {
        this.followers = response;
      });
  }

}
