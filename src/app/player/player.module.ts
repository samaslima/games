import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { PlayerListComponent } from "./player-list/player-list.component";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { PlayerFormComponent } from "./player-form/player-form.component";

const playerRoutes: Routes = [
  { path: "players", component: PlayerListComponent },
  { path: "player-form", component: PlayerFormComponent },
];

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerDetailsComponent,
    PlayerFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(playerRoutes),
  ],
  exports: [PlayerListComponent, PlayerFormComponent],
})
export class PlayerModule {}
