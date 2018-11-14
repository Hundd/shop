import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHovered]'
})
export class HoveredDirective {
  @Input('appHovered') color: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter', ['$event'])
  mouseEnter() {
    this.savedColor = this.backgroundColor;
    this.backgroundColor = this.color || 'lightblue';
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave() {
    this.backgroundColor = this.savedColor;
  }

  private savedColor: string;

  constructor() {}
}
