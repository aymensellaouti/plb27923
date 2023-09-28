import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerSevice } from "../../services/logger.service";
import { SayHelloService } from "../../services/say-hello.service";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent implements OnInit {
  date = new Date();
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;

  constructor(
    private loggerService: LoggerSevice,
    private sayHelloService: SayHelloService
  ) {
    this.loggerService.log("cc CvComponent");
    this.sayHelloService.hello();
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
      new Cv(3, "Yvan", "Guillermin", "Dev", "", "12345", 20),
      new Cv(4, "Amel", "Sndjak", "Dev", "           ", "12345", 18),
      new Cv(5, "Angie", "Reyes", "Dev", "           ", "12345", 18),
    ];
  }
  ngOnInit(): void {}

  onSelectCv(cv: Cv) {
    /* console.log(cv);
     */
    this.selectedCv = cv;
  }
}
