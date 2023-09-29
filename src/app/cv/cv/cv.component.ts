import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerSevice } from "../../services/logger.service";
import { SayHelloService } from "../../services/say-hello.service";
import { CvService } from "../service/cv.service";
import { ToastrService } from "ngx-toastr";
import { TodoService } from "../../todo/service/todo.service";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
  providers: [],
})
export class CvComponent implements OnInit {
  date = new Date();
  cvs: Cv[] = [];
  nb = 0;
  constructor(
    private loggerService: LoggerSevice,
    private sayHelloService: SayHelloService,
    private cvService: CvService,
    private toastr: ToastrService,
    private todoService: TodoService
  ) {
    this.loggerService.log("cc CvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
    this.sayHelloService.hello();
    this.cvs = this.cvService.getCvs();
    this.cvService.selectCv$.subscribe({
      next: () => this.nb++,
    });
  }
  ngOnInit(): void {}
}
