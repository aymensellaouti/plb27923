import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-fils",
  templateUrl: "./fils.component.html",
  styleUrls: ["./fils.component.css"],
})
export class FilsComponent {
  /* Il crée un event */
  @Output() sendMessageToDad = new EventEmitter<string>();

  onSendData() {
    /* Il emet l'event en y cachant la data */
    this.sendMessageToDad.emit("cc papa");
  }
}
