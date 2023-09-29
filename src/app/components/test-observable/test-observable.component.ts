import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, filter, map } from "rxjs";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent {
  countDownObservable$: Observable<number>;

  constructor(private toaster: ToastrService) {
    this.countDownObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.countDownObservable$.subscribe({
      /* En cas de nouvelle données fais ca */
      next: (val) => {
        console.log(val);
      },
      /* En cas de du flux fais ca */
      complete: () => {},
      /* En cas d'erreur fais ca */
      error: (e) => {},
    });
    this.countDownObservable$
      .pipe(
        /* 5 4 3 2 1 */
        map((x) => (x = x * 3)),
        /* 15 12 9 6 3 */
        filter((x) => x % 2 == 0)
        /*   12   6   */
      )
      .subscribe({
        /* En cas de nouvelle données fais ca */
        next: (val) => {
          this.toaster.info("" + val);
        },
        /* En cas de du flux fais ca */
        complete: () => {
          this.toaster.error("BOOOOM !!!!");
        },
      });
  }
}
