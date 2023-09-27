import { Component, Input } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent {
  @Input({ required: true }) name = "first";
  buttonText = "show";
  isHidden = true;
  message = "";
  constructor() {
    /* setTimeout(() => {
      this.name = "newName";
    }, 1500); */
  }
  showHide() {
    this.isHidden = !this.isHidden;
    this.buttonText = this.isHidden ? "show" : "hide";
  }
  changeMessage(content: string) {
    this.message = content;
  }
}
