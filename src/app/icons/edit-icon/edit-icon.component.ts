import { Component, EventEmitter, HostBinding, Output } from "@angular/core";

@Component({
  selector: "app-edit-icon",
  templateUrl: "./edit-icon.component.svg",
})
export class EditIconComponent {
  @Output() update = new EventEmitter<void>();

  @HostBinding("class") classes = "w-6 cursor-pointer";
}
