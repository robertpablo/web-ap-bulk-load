import { IServerBulkLoadConfig } from '../../interfaces';

export namespace AppBulkLoadStoreActions {
  export namespace BulkLoadConfig {
    export class GetBulkLoadConfig {
      static readonly type = '[RPBJ-STORE - BULK-LOAD CONFIG] GetGlobalConfig';
      constructor() {}
    }

    export class SetBulkLoadConfig {
      static readonly type = '[RPBJ-STORE - BULK-LOAD CONFIG] SetGlobalConfig';
      constructor(public payload: IServerBulkLoadConfig) {}
    }
  }
}
