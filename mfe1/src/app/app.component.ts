import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  #sharedService = inject(SharedLibService);
  token: string | undefined;

  ngOnInit(): void {
    this.#sharedService.on('token-shared').subscribe((token) => {
      this.token = token;
    });
  }
}
