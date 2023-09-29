import { Injectable } from "@angular/core";
import { Cv } from "../model/cv.model";
import { Observable, Subject, distinctUntilChanged } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API } from "../../config/api.config";

@Injectable({
  providedIn: "root",
})
export class CvService {
  private cvs: Cv[] = [];
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable().pipe(distinctUntilChanged());
  constructor(private http: HttpClient) {
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
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }
  findFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }

  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
