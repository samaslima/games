import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerListComponent } from "./player-list/player-list.component";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { PlayerFormComponent } from "./player-form/player-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerDetailsComponent,
    PlayerFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PlayerListComponent, PlayerFormComponent],
})
export class PlayerModule {}
