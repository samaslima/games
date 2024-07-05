import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { GameService } from "../game.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription, filter, map } from "rxjs";
import { GameT } from "../game.types";

type ModeT = "Adicionar" | "Atualizar";

@Component({
  selector: "app-game-form",
  templateUrl: "./game-form.component.html",
})
export class GameFormComponent implements OnInit, OnDestroy {
  @HostBinding("class") classes = "flex flex-col gap-2";

  name = new FormControl("", [Validators.required, Validators.minLength(3)]);
  private gameId!: string;

  mode: ModeT = "Adicionar";
  private routeSubscription!: Subscription;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.paramMap
      .pipe(
        map(() => window.history.state),
        filter((game) => !!game.id),
      )
      .subscribe((game: GameT) => {
        this.name.setValue(game.name);
        this.gameId = game.id;
        this.mode = "Atualizar";
      });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  submitForm(): void {
    if (this.name.valid) {
      if (this.mode === "Adicionar") {
        this.gameService.newGame(this.name.value as string).subscribe();
      } else {
        this.gameService
          .updateGame(this.gameId, this.name.value as string)
          .subscribe();
      }
      this.name.reset();
      this.navigateToList();
    } else {
      this.name.markAsDirty();
    }
  }

  private navigateToList(): void {
    this.router.navigateByUrl("/games");
  }
}
