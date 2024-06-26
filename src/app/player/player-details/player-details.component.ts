import { Component, HostBinding, Input } from "@angular/core";
import { PlayerT } from "../player.type";
import { PlayerService } from "../player.service";

@Component({
  selector: "app-player-details",
  templateUrl: "./player-details.component.html",
})
export class PlayerDetailsComponent {
  @HostBinding("class") classes =
    "grid grid-cols-2 grid-rows-2 gap-1 p-6 shadow-md border";

  @Input() player!: PlayerT;

  constructor(private playerService: PlayerService) {}

  public deletePlayer(): void {
    this.playerService.deletePlayer(this.player.id).subscribe();
  }
}
