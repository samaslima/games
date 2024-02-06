import { Component, Input } from '@angular/core';
import { GameT } from '../game.types';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html'
})
export class GameDetailsComponent {

  @Input() game!: GameT;

}
