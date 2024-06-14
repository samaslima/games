import { Injectable } from "@angular/core";
import { GameT, GamesT } from "./game.types";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private url = "http://localhost:3000";

  public deleteEvent = new Subject<void>();

  constructor(private http: HttpClient) {}

  public getGames(): Observable<GamesT> {
    return this.http.get<GamesT>(`${this.url}/games`);
  }

  public newGame(name: string): Observable<GameT> {
    const game = { name };
    return this.http.post<GameT>(`${this.url}/games`, game);
  }

  public deleteGame(id: string): Observable<string> {
    return this.http
      .delete(`${this.url}/games/${id}`, {
        responseType: "text",
      })
      .pipe(tap(() => this.deleteEvent.next()));
  }
}
