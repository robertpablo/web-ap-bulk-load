import { InjectionToken } from '@angular/core';
import { StateToken } from '@ngxs/store';
import { IServerBulkLoadConfig } from '../../interfaces';

export namespace BULK_LOAD_STATE_TOKEN {
  export const BULK_LOAD_CONFIG = new StateToken<IServerBulkLoadConfig>(
    'appBulkLoadConfigState'
  );
}
