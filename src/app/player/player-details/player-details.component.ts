import { Component, HostBinding, Input } from "@angular/core";
import { PlayerT } from "../player.type";
import { PlayerService } from "../player.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-player-details",
  templateUrl: "./player-details.component.html",
})
export class PlayerDetailsComponent {
  @HostBinding("class") classes =
    "grid grid-cols-2 grid-rows-2 gap-1 p-6 shadow-md border";

  @Input() player!: PlayerT;

  constructor(
    private playerService: PlayerService,
    private router: Router,
  ) {}

  deletePlayer(): void {
    this.playerService.deletePlayer(this.player.id).subscribe();
  }

  updatePlayer(): void {
    this.playerService
      .updatePlayer(this.player.id, this.player.name)
      .subscribe();
  }

  navigateForm(): void {
    this.router.navigateByUrl("/player-form", {
      state: this.player,
    });
  }
}
