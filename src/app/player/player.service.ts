import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PlayerT } from "./player.type";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  private array = ["player 1", "player 2", "player 3"];
  public players$ = new BehaviorSubject(this.array.map(this.createPlayer));

  private createPlayer(name: string): PlayerT {
    return {
      id: crypto.randomUUID(),
      name,
    };
  }

  public newPlayer(name: string): void {
    const player = this.createPlayer(name);
    const listPlayers: PlayerT[] = [...this.players$.getValue(), player];

    this.players$.next(listPlayers);
  }

  public deletePlayer(id: string): void {
    const newList: PlayerT[] = this.players$
      .getValue()
      .filter((player) => player.id !== id);

    this.players$.next(newList);
  }
}
