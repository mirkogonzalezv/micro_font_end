import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #sharedLibService = inject(SharedLibService);

  token = signal<string | null>(null);
  send_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hcmNlbG8gQ29sbGFvIiwiY29tcGFueSI6IkVORUwiLCJpYXQiOjE1MTYyMzkwMjJ9.o_JVxPepMK-FR4aX5tmU1gAp7F3KLOnDxAshxP1oOC8';

  enviarToken() {
    this.#sharedLibService.emit('token-shared', this.send_token);
  }
}
