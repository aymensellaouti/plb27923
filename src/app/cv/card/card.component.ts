import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv.model";
import { CvService } from "../service/cv.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  cv$: Observable<Cv>;
  @Input() cv: Cv | null = null;

  constructor(private cvService: CvService) {
    this.cv$ = this.cvService.selectCv$;
  }
}
