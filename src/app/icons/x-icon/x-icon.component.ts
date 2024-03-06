import { Component, EventEmitter, HostBinding, Output } from "@angular/core";

@Component({
  selector: "app-x-icon",
  templateUrl: "./x-icon.component.svg",
})
export class XIconComponent {
  @Output() delete = new EventEmitter<void>();

  @HostBinding("class") classes = "relative w-6";

  public deleteGame(): void {
    this.delete.emit();
  }
}
