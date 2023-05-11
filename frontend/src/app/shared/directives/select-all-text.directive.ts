import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[select-all-text]',
})

export class SelectAllTextDirective {
  constructor(private element: ElementRef) {}

  @HostListener('dblclick')
  onDoubleClick() {
    if (this.element.nativeElement.classList.contains('show-all')) {
      const range = document.createRange();
      range.selectNodeContents(this.element.nativeElement);
      const selection = window.getSelection();
      if(selection){
      selection.removeAllRanges();
      selection.addRange(range);
      }
    }
  }
}
