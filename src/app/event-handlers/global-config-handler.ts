import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { eventBus } from '@ropabajo/core';
import { AppBulkLoadStoreActions, IServerBulkLoadConfig } from '../core';

@Injectable({
  providedIn: 'root',
})
export class ConfigHandler {
  constructor(private store: Store) {}

  listenForConfigUpdates() {
    const globalConfigElement = document.querySelector('global-config') as any;

    eventBus.on('configUpdated', (event: any) => {
      console.log(event.detail, 'GLOBAL_CONFIG bulk-load - 2');

      const {
        configuration: { gateway },
      } = event.detail;

      if (gateway) {
        this.setBulkLoadConfig({ bulkload: gateway.bulkload });
      }
    });

    const initialConfig = globalConfigElement.getConfig();
    if (initialConfig) {
      console.log(initialConfig, 'GLOBAL_CONFIG initial bulk-load');
      const {
        configuration: { gateway },
      } = initialConfig;

      if (gateway) {
        this.setBulkLoadConfig({ bulkload: gateway.bulkload });
      }
    }
  }

  setBulkLoadConfig = (payload: IServerBulkLoadConfig) => {
    this.store.dispatch(
      new AppBulkLoadStoreActions.BulkLoadConfig.SetBulkLoadConfig(payload)
    );
  };

}
