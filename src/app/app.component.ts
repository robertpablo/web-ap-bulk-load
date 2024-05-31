import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigHandler } from './event-handlers/global-config-handler';

@Component({
  standalone: true,
  selector: 'rpbj-bulk-load',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private configHandler: ConfigHandler) {}

  ngOnInit(): void {
    this.configHandler.listenForConfigUpdates();
  }
}
