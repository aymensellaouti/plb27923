import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "input[appRainbow]",
})
export class RainbowDirective {
  @HostBinding("style.color")
  color = "black";
  @HostBinding("style.border-color")
  bc = "black";
  @HostBinding("style.border")
  border = "4px solid black";
  constructor() {
    console.log("I am created");
  }

  @HostListener("keyup")
  onKeyUp() {
    this.bc = this.color = this.changeColor();
  }

  private changeColor(): string {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}
