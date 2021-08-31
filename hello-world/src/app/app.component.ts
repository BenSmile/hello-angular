import {Component} from '@angular/core';
import {FavoriteChangeEventArgs} from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'otherwise';

  tweet = {
    body: '...',
    likeCount: 10,
    isLiked: true
  };
  title = 'hello-world';

  post = {
    title: 'Title',
    isFavorite: true
  };

  public onFavoriteChange(eventArgs: FavoriteChangeEventArgs): void {
    console.log('Favrotie changes : ', eventArgs);

  }
}
