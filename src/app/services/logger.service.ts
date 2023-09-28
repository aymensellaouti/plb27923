import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerSevice {
  log(message: unknown) {
    console.log(message);
  }
}
