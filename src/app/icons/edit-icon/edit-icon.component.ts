import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-edit-icon",
  templateUrl: "./edit-icon.component.svg",
})
export class EditIconComponent {
  @HostBinding("class") classes = "w-6 cursor-pointer";
}
