import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { PlayersT } from "../player.type";
import { PlayerService } from "../player.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
})
export class PlayerListComponent implements OnInit, OnDestroy {
  @HostBinding("class") classes = "flex flex-col gap-5";

  private eventSubscription!: Subscription;

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

  getPlayers(): void {
    this.playerService
      .getPlayers()
      .subscribe((newList) => (this.players = newList));
  }
}
