import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { GamesT } from "../game.types";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html",
})
export class GameListComponent implements OnInit, OnDestroy {
  @HostBinding("class") classes = "flex flex-col gap-5";

  private eventSubscription: any;

  games: GamesT = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getGames();
    this.eventSubscription = this.gameService.deleteEvent.subscribe(() =>
      this.getGames(),
    );
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  public getGames(): void {
    this.gameService.getGames().subscribe((newList) => (this.games = newList));
  }
}
