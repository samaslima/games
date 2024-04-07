import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { GameDetailsComponent } from "./game-details/game-details.component";
import { GameListComponent } from "./game-list/game-list.component";
import { GameFormComponent } from "./game-form/game-form.component";
import { IconsModule } from "../icons/icons.module";

const gameRoutes: Routes = [
  { path: "games", component: GameListComponent },
  { path: "game-form", component: GameFormComponent },
];

@NgModule({
  declarations: [GameDetailsComponent, GameListComponent, GameFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconsModule,
    RouterModule.forChild(gameRoutes),
  ],
  exports: [GameListComponent, GameFormComponent],
})
export class GameModule {}
