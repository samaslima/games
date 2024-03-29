import { Component, HostBinding, OnInit } from "@angular/core";
import { GamesT } from "../game.types";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html",
})
export class GameListComponent implements OnInit {
  @HostBinding("class") classes = "flex flex-col gap-5";

  games: GamesT = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.games$.subscribe((newList) => (this.games = newList));
  }
}
