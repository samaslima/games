import { Component, HostBinding } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-form",
  templateUrl: "./game-form.component.html",
})
export class GameFormComponent {
  @HostBinding("class") classes = "flex flex-col gap-2";

  name = new FormControl("", [Validators.required, Validators.minLength(3)]);

  constructor(private gameService: GameService) {}

  public submitForm(): void {
    if (this.name.valid) {
      this.gameService.newGame(this.name.value as string).subscribe();
      this.name.reset();
    } else {
      this.name.markAsDirty();
    }
  }
}
