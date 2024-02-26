import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameDetailsComponent } from "./game-details/game-details.component";
import { GameListComponent } from "./game-list/game-list.component";
import { GameFormComponent } from "./game-form/game-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [GameDetailsComponent, GameListComponent, GameFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [GameListComponent, GameFormComponent],
})
export class GameModule {}
