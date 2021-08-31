import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat')
  public format: string;

  constructor(private el: ElementRef) {

  }

  // @HostListener('focus')
  // public onFocus(): void {
  //   console.log('onFocus');
  // }

  @HostListener('blur')
  public onBlur(): void {
    let value = this.el.nativeElement.value;

    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
