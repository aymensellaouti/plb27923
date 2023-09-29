import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second.component";
import { ColorComponent } from "./components/color/color.component";
import { TwoComponent } from "./components/two/two.component";
import { FormsModule } from "@angular/forms";
import { RotatingCardComponent } from "./components/rotating-card/rotating-card.component";
import { PereComponent } from "./components/pere/pere.component";
import { FilsComponent } from "./components/fils/fils.component";
import { CvComponent } from "./cv/cv/cv.component";
import { ListComponent } from "./cv/list/list.component";
import { ItemComponent } from "./cv/item/item.component";
import { CardComponent } from "./cv/card/card.component";
import { NgStyleComponent } from "./directives/ng-style/ng-style.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { NgClassComponent } from "./directives/ng-class/ng-class.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { RainbowDirective } from "./directives/rainbow.directive";
import { UsdToBtcPipe } from "./pipes/usd-to-btc.pipe";
import { DefaultImagePipe } from "./cv/pipes/default-image.pipe";
import { TodoComponent } from "./todo/todo/todo.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";
import { TestFormComponent } from "./components/test-form/test-form.component";
import { LoginComponent } from "./auth/login/login.component";
import { TestObservableComponent } from "./components/test-observable/test-observable.component";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { AuthInterceptor } from "./auth/iterceptors/auth.interceptor";
import { LoggerSevice } from "./services/logger.service";
import { Auth2Interceptor } from "./auth/iterceptors/auth2.interceptor";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    NgStyleComponent,
    MiniWordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    UsdToBtcPipe,
    DefaultImagePipe,
    TodoComponent,
    NavbarComponent,
    NF404Component,
    DetailsCvComponent,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    AddCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    /* { provide: LoggerSevice, useClass: LoggerSevice }, */
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: Auth2Interceptor,
      multi: true,
    }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
