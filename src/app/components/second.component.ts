import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-second",
  template: ` <p>second works!</p> `,
  styles: [],
})
export class SecondComponent {
  constructor(private acr: ActivatedRoute) {
    console.log(acr);
  }
}
