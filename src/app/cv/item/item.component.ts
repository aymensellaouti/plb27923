import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Cv } from "../model/cv.model";
import { CvService } from "../service/cv.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  @Input() cv: Cv | null = null;
  /* @Output() selectCv = new EventEmitter<Cv>(); */
  constructor(private cvService: CvService) {}
  onSelectCv() {
    if (this.cv) this.cvService.selectCv(this.cv);
  }
}
