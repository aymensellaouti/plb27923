import { Injectable } from "@angular/core";
import { LoggerSevice } from "./logger.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SayHelloService {
  constructor(private loggerService: LoggerSevice, private http: HttpClient) {}

  hello() {
    this.loggerService.log("hello :D");
  }

  getTodos(): Observable<unknown> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
