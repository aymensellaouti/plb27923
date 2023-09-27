import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Cv } from "../model/cv.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() cvs: Cv[] = [];
  @Output() selectCv = new EventEmitter<Cv>();

  forwardCv(cv: Cv) {
    this.selectCv.emit(cv);
  }
}
