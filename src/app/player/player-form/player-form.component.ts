import { Component, HostBinding } from "@angular/core";
import { PlayerService } from "../player.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-player-form",
  templateUrl: "./player-form.component.html",
})
export class PlayerFormComponent {
  @HostBinding("class") classes = "flex flex-col gap-2";

  name = new FormControl("", [Validators.required, Validators.minLength(3)]);

  constructor(private playerService: PlayerService) {}

  public submitForm(): void {
    if (this.name.valid) {
      this.playerService.newPlayer(this.name.value as string).subscribe();
      this.name.reset();
    } else {
      this.name.markAsDirty();
    }
  }
}
