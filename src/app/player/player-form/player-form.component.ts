import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { PlayerService } from "../player.service";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription, filter, map } from "rxjs";
import { PlayerT } from "../player.type";

type ModeT = "Adicionar" | "Atualizar";

@Component({
  selector: "app-player-form",
  templateUrl: "./player-form.component.html",
})
export class PlayerFormComponent implements OnInit, OnDestroy {
  @HostBinding("class") classes = "flex flex-col gap-2";

  name = new FormControl("", [Validators.required, Validators.minLength(3)]);
  private playerId!: string;

  mode: ModeT = "Adicionar";
  private routeSubscription!: Subscription;

  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.paramMap
      .pipe(
        map(() => window.history.state),
        filter((player) => !!player.id),
      )
      .subscribe((player: PlayerT) => {
        this.name.setValue(player.name);
        this.playerId = player.id;
        this.mode = "Atualizar";
      });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  submitForm(): void {
    if (this.name.valid) {
      if (this.mode === "Adicionar") {
        this.playerService
          .newPlayer(this.name.value as string)
          .subscribe(() => this.navigateToList());
      } else {
        this.playerService
          .updatePlayer(this.playerId, this.name.value as string)
          .subscribe(() => this.navigateToList());
      }
    } else {
      this.name.markAsDirty();
    }
  }

  private navigateToList(): void {
    this.router.navigateByUrl("/players");
  }
}
