import { Injectable } from "@angular/core";
import { GameT, GamesT } from "./game.types";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private url = "http://localhost:3000";

  deleteEvent = new Subject<void>();

  constructor(private http: HttpClient) {}

  getGames(): Observable<GamesT> {
    return this.http.get<GamesT>(`${this.url}/games`);
  }

  newGame(name: string): Observable<GameT> {
    const game = { name };
    return this.http.post<GameT>(`${this.url}/games`, game);
  }

  deleteGame(id: string): Observable<string> {
    return this.http
      .delete(`${this.url}/games/${id}`, {
        responseType: "text",
      })
      .pipe(tap(() => this.deleteEvent.next()));
  }

  updateGame(id: string, name: string): Observable<GameT> {
    const game = { name };
    return this.http.put<GameT>(`${this.url}/games/${id}`, game);
  }
}
