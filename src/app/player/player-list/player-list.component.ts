import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { PlayersT } from "../player.type";
import { PlayerService } from "../player.service";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
})
export class PlayerListComponent implements OnInit, OnDestroy {
  @HostBinding("class") classes = "flex flex-col gap-5";

  private eventSubscription: any;

  players: PlayersT = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayers();
    this.eventSubscription = this.playerService.deleteEvent.subscribe(() =>
      this.getPlayers(),
    );
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  public getPlayers(): void {
    this.playerService
      .getPlayers()
      .subscribe((newList) => (this.players = newList));
  }
}
