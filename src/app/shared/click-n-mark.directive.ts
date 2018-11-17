import { element } from 'protractor';
import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[click-n-mark]'
})
export class ClickNMarkDirective {
  @Input() textAfter: string;

  @HostListener('click')
  clickHandler() {
    this.render.setStyle(this.host.nativeElement, 'font-weight', 'bold');
    this.render.setStyle(
      this.host.nativeElement,
      'text-decoration',
      'underline'
    );

    if (this.textAfter !== undefined) {
      const newElem = this.render.createText(`(${this.textAfter})`);
      this.render.appendChild(this.host.nativeElement, newElem);
    }
  }

  constructor(private host: ElementRef, private render: Renderer2) {}
}
