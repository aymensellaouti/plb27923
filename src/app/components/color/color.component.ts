import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"],
})
export class ColorComponent implements OnInit {
  ngOnInit(): void {
    this.color = this.defaultColor;
  }
  @Input() defaultColor = "red";
  color = this.defaultColor;

  changeColor(newColor: string): void {
    this.color = newColor;
  }
  resetColor() {
    this.color = this.defaultColor;
  }
}
