import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { GameModule } from "./game/game.module";
import { PlayerModule } from "./player/player.module";

const appRoutes: Routes = [
  { path: "", redirectTo: "/games", pathMatch: "full" },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GameModule,
    PlayerModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
