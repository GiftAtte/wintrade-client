import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elemment:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    
  }


  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.addClass(this.elemment.nativeElement,'text-bg-warning');
    this.renderer.setStyle(this.elemment.nativeElement,'transition','0.52');
  }
  @HostListener('mouseout') onMouseOut(){
    this.renderer.removeClass(this.elemment.nativeElement,'text-bg-warning');
    this.renderer.setStyle(this.elemment.nativeElement,'transition','0.52');
  }
}
