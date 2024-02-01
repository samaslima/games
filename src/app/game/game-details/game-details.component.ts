import { Component } from '@angular/core';

type GameT = {
  id: string,
  name: string
}

@Component({
  selector: 'app-game-details',
  template: `
      <h1>{{game.name}}</h1>
      <h2>{{game.id}}</h2>
  `,
})
export class GameDetailsComponent {

  game: GameT = {
    id: self.crypto.randomUUID(),
    name: 'test game'
  }

}
