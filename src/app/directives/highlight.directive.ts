import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective implements OnInit {
  @Input() in = "yellow";
  @Input() out = "red";
  /* L'apparence que je veux gérer */
  @HostBinding("style.backgroundColor")
  bgc = this.out;
  @HostBinding("style.color")
  color = "pink";
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    this.bgc = this.out;
  }

  /* Le comportement que je veux gérer */
  /* Lorsque l'evenement mouseenter est déclenché on exécute la mé🍵
    décorée qui est ici onMouseEnter
  */
  @HostListener("mouseenter")
  onMouseEnter() {
    this.bgc = this.in;
    this.element.nativeElement.innerHTML = "IN";
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    this.bgc = this.out;
    this.element.nativeElement.innerHTML = "OUT";
  }
}
