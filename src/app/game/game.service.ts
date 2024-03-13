import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GameT } from "./game.types";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private array = ["game 1", "game 2", "game 3"];

  public games$ = new BehaviorSubject(this.array.map(this.createGame));

  private createGame(name: string): GameT {
    return {
      id: crypto.randomUUID(),
      name,
    };
  }

  public newGame(name: string): void {
    const game = this.createGame(name);
    const listGames: GameT[] = [...this.games$.getValue(), game];

    this.games$.next(listGames);
  }

  public deleteGame(id: string): void {
    const newList: GameT[] = this.games$
      .getValue()
      .filter((game) => game.id !== id);

    this.games$.next(newList);
  }
}
