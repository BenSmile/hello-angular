import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input()
  title: string;

  @Input('is-Favorite')
  public isFavorite: boolean;

  @Output('change')
  change = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {

  }

  public onFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}

export interface FavoriteChangeEventArgs {
  newValue: number;
}
