import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input('title')
  public title: string;
  isExpanded: boolean;

  public toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

}
