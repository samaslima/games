import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @HostBinding('class') classes: string = 'block max-w-5xl mx-auto p-2';

  title = 'games-app';
}
