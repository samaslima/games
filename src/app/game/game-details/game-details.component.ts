import { Component, HostBinding, Input } from "@angular/core";
import { GameT } from "../game.types";
import { GameService } from "../game.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-game-details",
  templateUrl: "./game-details.component.html",
})
export class GameDetailsComponent {
  @HostBinding("class") classes =
    "grid grid-cols-2 grid-rows-2 gap-1 p-6 shadow-md border";

  @Input() game!: GameT;

  constructor(
    private gameService: GameService,
    private router: Router,
  ) {}

  deleteGame(): void {
    this.gameService.deleteGame(this.game.id).subscribe();
  }

  updateGame(): void {
    this.gameService.updateGame(this.game.id, this.game.name).subscribe();
  }

  navigateForm(): void {
    this.router.navigateByUrl("/game-form", {
      state: this.game,
    });
  }
}
