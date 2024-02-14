import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameT } from './game.types';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private array = ['game 1', 'game 2', 'game 3'];

  public games$ = new BehaviorSubject(this.array.map(this.createGame));

  constructor() { }

  private createGame(name: string): GameT {
    return {
      id: crypto.randomUUID(),
      name
    }
  }
}
