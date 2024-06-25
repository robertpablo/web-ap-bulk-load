import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { IBulkLoadCreate } from '../bulk-load-create.store.interface';
import { Injectable } from '@angular/core';
import { initialBulkLoadCreateContainerState } from '../bulk-load-create.store.model';
import { BulkLoadCreateService } from '../../services/bulk-load-create.service';
import { BulkLoadCreateStoreActions } from '../bulk-load-create.actions';
import { map } from 'rxjs';
import { produce } from 'immer';

export const BULK_LOAD_CREATE_CONTAINER_STATE_TOKEN =
  new StateToken<IBulkLoadCreate>('bulkLoadCreateState');

@State({
  name: BULK_LOAD_CREATE_CONTAINER_STATE_TOKEN,
  defaults: initialBulkLoadCreateContainerState.bulkLoadCreate,
})
@Injectable()
export class BulkLoadCreateState {
  constructor(private bulkLoadCreateService: BulkLoadCreateService) {}

  @Action(BulkLoadCreateStoreActions.BulkLoadCreate.GetFormats)
  GetFormats({ getState, setState }: StateContext<IBulkLoadCreate>) {
    setState(
      produce(getState(), (draft) => {
        draft.combos.formats.loading = true;
      })
    );

    return this.bulkLoadCreateService.getFormats().pipe(
      map((formats: any) => {
        setState(
          produce(getState(), (draft) => {
            draft.combos.formats.list = formats;
            draft.combos.formats.loading = false;
          })
        );
      })
    );
  }
}
