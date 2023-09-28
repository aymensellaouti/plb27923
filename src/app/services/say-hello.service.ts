import { Injectable } from "@angular/core";
import { LoggerSevice } from "./logger.service";

@Injectable({
  providedIn: "root",
})
export class SayHelloService {
  constructor(private loggerService: LoggerSevice) {}

  hello() {
    this.loggerService.log("hello :D");
  }
}
