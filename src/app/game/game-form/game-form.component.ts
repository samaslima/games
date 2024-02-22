import { Component, HostBinding } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html'
})
export class GameFormComponent {

  @HostBinding('class') classes: string = 'flex flex-col gap-2';

  name = new FormControl('', Validators.required);

  constructor(private gameService: GameService) {}

  public submitForm() {
    if (this.name.valid) {
      this.gameService.newGame(this.name.value as string);
      this.name.reset();
    } else {
      this.name.markAsDirty
    }
  }
}
