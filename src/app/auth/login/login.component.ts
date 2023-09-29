import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { APP_ROUTES } from "../../config/routes.config";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem("token", response.id);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: () => {
        this.toaster.error("Veuillez vérifier vos credentials");
      },
    });
    /*
            Récupérer le login + pwd
            Chercher l'api et voir est ce que c'est bon ou pas
            Si c'est 👌
              stocker le tokebn dans le localStorage
              Rediriger le user vers la page des cvs
            si c'est ko
              On toast une erreur
          */
  }
}
