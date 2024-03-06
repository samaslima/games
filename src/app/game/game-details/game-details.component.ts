import { Component, HostBinding, Input } from "@angular/core";
import { GameT } from "../game.types";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-details",
  templateUrl: "./game-details.component.html",
})
export class GameDetailsComponent {
  @HostBinding("class") classes = "flex flex-col gap-1 p-6 shadow-md border";

  @Input() game!: GameT;

  constructor(private gameService: GameService) {}

  public deleteGame(id: string): void {
    this.gameService.deleteGame(id);
  }
}
