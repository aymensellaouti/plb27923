import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv.model";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  constructor() {
    this.cvs = [
      new Cv(
        1,
        "aymen",
        "sellaouti",
        "teacher",
        "rotating_card_profile2.png",
        "1234",
        41
      ),
      new Cv(
        2,
        "skander",
        "sellaouti",
        "teacher",
        "rotating_card_profile3.png",
        "12345",
        4
      ),
    ];
  }
  ngOnInit(): void {}

  onSelectCv(cv: Cv) {
    /* console.log(cv);
     */
    this.selectedCv = cv;
  }
}
