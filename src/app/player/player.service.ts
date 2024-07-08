import { Injectable } from "@angular/core";
import { Observable, Subject, tap } from "rxjs";
import { PlayerT, PlayersT } from "./player.type";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  private url = "http://localhost:3000";

  deleteEvent = new Subject<void>();

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<PlayersT> {
    return this.http.get<PlayersT>(`${this.url}/players`);
  }

  newPlayer(name: string): Observable<PlayerT> {
    const player = { name };
    return this.http.post<PlayerT>(`${this.url}/players`, player);
  }

  deletePlayer(id: string): Observable<string> {
    return this.http
      .delete(`${this.url}/players/${id}`, {
        responseType: "text",
      })
      .pipe(tap(() => this.deleteEvent.next()));
  }

  updatePlayer(id: string, name: string): Observable<PlayerT> {
    const player = { name };
    return this.http.put<PlayerT>(`${this.url}/players/${id}`, player);
  }
}
