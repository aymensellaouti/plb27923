import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
