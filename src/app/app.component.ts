import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @HostBinding('class') classes: string = 'block w-screen p-6 grid grid-cols-2 gap-6';

  title = 'games-app';
}
