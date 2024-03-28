import { Component, HostBinding, OnInit } from "@angular/core";
import { PlayersT } from "../player.type";
import { PlayerService } from "../player.service";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
})
export class PlayerListComponent implements OnInit {
  @HostBinding("class") classes = "flex flex-col gap-5";

  players: PlayersT = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.players$.subscribe(
      (newList) => (this.players = newList),
    );
  }
}
