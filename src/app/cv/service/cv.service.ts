import { Injectable } from "@angular/core";
import { Cv } from "../model/cv.model";

@Injectable({
  providedIn: "root",
})
export class CvService {
  private cvs: Cv[] = [];
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
      new Cv(3, "Yvan", "Guillermin", "Dev", "", "12345", 20),
      new Cv(4, "Amel", "Sndjak", "Dev", "           ", "12345", 18),
      new Cv(5, "Angie", "Reyes", "Dev", "           ", "12345", 18),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }

  findCvById(id: number): Cv | null {
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
}
