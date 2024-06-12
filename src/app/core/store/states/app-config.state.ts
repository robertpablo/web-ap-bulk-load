import { Action, State, StateContext } from '@ngxs/store';
import { BULK_LOAD_STATE_TOKEN } from '../tokens';
import { initialBulkLoadState } from '../model/app-state.model';
import { Injectable } from '@angular/core';
import { AppBulkLoadStoreActions } from '../actions';
import { IServerBulkLoadConfig } from '../../interfaces';
import { produce } from 'immer';

@State({
  name: BULK_LOAD_STATE_TOKEN.BULK_LOAD_CONFIG,
  defaults: initialBulkLoadState.bulkLoadConfig,
})
@Injectable()
export class AppBulkLoadkConfigState {
  constructor() {}

  @Action(AppBulkLoadStoreActions.BulkLoadConfig.GetBulkLoadConfig)
  GetBulkLoadConfig({
    getState,
    setState,
  }: StateContext<IServerBulkLoadConfig>) {
    return getState();
  }

  @Action(AppBulkLoadStoreActions.BulkLoadConfig.SetBulkLoadConfig)
  SetBulkLoadConfig(
    { getState, setState }: StateContext<IServerBulkLoadConfig>,
    { payload }: AppBulkLoadStoreActions.BulkLoadConfig.SetBulkLoadConfig
  ) {
    setState(
      produce(getState(), (draft) => {
        draft.bulkload = payload.bulkload;
      })
    );
  }
}
