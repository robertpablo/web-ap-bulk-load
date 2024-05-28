import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { RouterOutlet } from '@angular/router';
import {
  APP_STATE_TOKEN,
  AppGlobalConfigState,
  ConfigurationService,
} from '@ropabajo/core';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'rpbj-bulk-load',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  //@Select(AppGlobalConfigState) globalConfig$!: Observable<any>;

  constructor(
    private store: Store,
    private configurationService: ConfigurationService
  ) {}

  ngOnInit(): void {
    //console.log(this.configurationService.global(), 'global bulk-load');

    console.log(
      this.store.selectSnapshot(APP_STATE_TOKEN.GLOBAL_CONFIG),
      'GLOBAL_CONFIG bulk-load'
    );

    const globalConfigElement = document.querySelector('global-config') as any;
    globalConfigElement.addEventListener(
      'configUpdated',
      (event: CustomEvent) => {
        console.log(event.detail, 'GLOBAL_CONFIG bulk-load - 2');
      }
    );

    const initialConfig = globalConfigElement.getConfig();
    if (initialConfig) {
      console.log(initialConfig, 'GLOBAL_CONFIG initial bulk-load');
    }
  }
}
