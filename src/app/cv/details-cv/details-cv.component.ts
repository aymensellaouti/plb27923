import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../service/cv.service";
import { APP_ROUTES } from "../../config/routes.config";

@Component({
  selector: "app-details-cv",
  templateUrl: "./details-cv.component.html",
  styleUrls: ["./details-cv.component.css"],
})
export class DetailsCvComponent {
  /* 1ére étape : Définir l'état de la classe */
  cv: Cv | null = null;
  /*
  A partir d'angular 16  @Input('id') id: number = 0;
 */
  /* 2éme étape : Récupérer l'Id de la route */
  constructor(
    private acr: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {
    const id = this.acr.snapshot.params["id"];
    this.cv = this.cvService.findCvById(+id);
    if (!this.cv) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
