import { Component, HostBinding, Input } from '@angular/core';
import { GameT } from '../game.types';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html'
})
export class GameDetailsComponent {

  @HostBinding('class') classes: string = 'flex flex-col gap-1 p-6 shadow-md border';

  @Input() game!: GameT;

}
