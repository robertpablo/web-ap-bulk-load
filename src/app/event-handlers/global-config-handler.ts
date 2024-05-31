import { Injectable } from '@angular/core';
import { eventBus } from '@ropabajo/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigHandler {
  constructor() {}

  listenForConfigUpdates() {
    const globalConfigElement = document.querySelector('global-config') as any;

    eventBus.on('configUpdated', (event: any) => {
      console.log(event.detail, 'GLOBAL_CONFIG bulk-load - 2');
    });

    const initialConfig = globalConfigElement.getConfig();
    if (initialConfig) {
      console.log(initialConfig, 'GLOBAL_CONFIG initial bulk-load');
    }
  }
}
