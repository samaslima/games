import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    GameDetailsComponent,
    GameListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameListComponent
  ]
})
export class GameModule { }
