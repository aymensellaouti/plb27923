import { Component } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { APP_ROUTES } from "../../config/routes.config";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
    private translateService: TranslateService
  ) {
    translateService.setDefaultLang("fr");
    translateService.addLangs(["en", "fr"]);
    const browserLang = translateService.getBrowserLang() ?? "fr";
    translateService.use(browserLang.match(/en|fr/) ? browserLang : "fr");
  }
  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }

  translate(langue: string) {
    this.translateService.use(langue);
  }
}
