import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { BULK_LOAD_STATE_TOKEN } from '../store';

@Injectable({
  providedIn: 'root',
})
export class BulkLoadConfigurationService {
  constructor(private store: Store) {}

  get apiBulkLoadAddress() {
    const { bulkload } = this.store.selectSnapshot(
      BULK_LOAD_STATE_TOKEN.BULK_LOAD_CONFIG
    );
    return bulkload ? bulkload : '';
  }
}
