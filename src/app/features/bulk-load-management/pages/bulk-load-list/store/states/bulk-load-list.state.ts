import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { initialBulkLoadContainerState } from '../bulk-load-list.store.model';
import { IBulkLoadList } from '../bulk-load-list.store.interface';
import { BulkLoadListStoreActions } from '../bulk-load-list.store.actions';
import { produce } from 'immer';
import { catchError, forkJoin, map, throwError } from 'rxjs';
import { BulkLoadListService } from '../../services/bulk-load-list.service';
import { IDataGridSource } from '@ropabajo/shared/interfaces';

export const BULK_LOAD_CONTAINER_STATE_TOKEN = new StateToken<IBulkLoadList>(
  'bulkLoadListState'
);

@State({
  name: BULK_LOAD_CONTAINER_STATE_TOKEN,
  defaults: initialBulkLoadContainerState.bulkLoadList,
})
@Injectable()
export class BulkLoadListState {
  constructor(private bulkLoadListService: BulkLoadListService) {}

  @Action(BulkLoadListStoreActions.BulkLoadList.PaginatedGrid)
  ListarPagina(
    { getState, setState }: StateContext<IBulkLoadList>,
    { payload }: BulkLoadListStoreActions.BulkLoadList.PaginatedGrid
  ) {
    const state = getState();

    let pageRequest = GridRequestFromSource(state.grid.source, payload);

    if (payload.skip != null && payload.skip != undefined) {
      pageRequest.skip = payload.skip;
    }

    setState(
      produce(state, (draft) => {
        draft.grid.loading = true;
      })
    );

    return forkJoin([
      this.bulkLoadListService.getPagedBulkLoads({
        pageNumber: pageRequest.page,
        pageSize: pageRequest.pageSize,
      }),
      this.bulkLoadListService.getTotalBulkLoads(),
    ]).pipe(
      map(([items, contador]: any[]) => {
        setState(
          produce(getState(), (draft) => {
            draft.grid.loading = false;
            draft.grid.source.items = items ?? [];
            draft.grid.source.total = contador.total ?? 0;

            draft.grid.source.page = pageRequest.page;
            draft.grid.source.pageSize = pageRequest.pageSize;
            draft.grid.source.orderBy = pageRequest.orderBy;
            draft.grid.source.orderDir = pageRequest.orderDir;
            draft.grid.source.skip = pageRequest.skip;
          })
        );
      }),
      catchError((err) => {
        setState(
          produce(getState(), (draft) => {
            draft.grid.loading = false;
            //draft. = err;
          })
        );
        return throwError(err);
      })
    );

    // return this.bulkLoadListService
    //   .getPagedBulkLoads({
    //     pageNumber: pageRequest.page,
    //     pageSize: pageRequest.pageSize,
    //   })
    //   .pipe(
    //     map((resp: any) => {
    //       setState(
    //         produce(getState(), (draft) => {
    //           draft.grid.loading = false;
    //           draft.grid.source.items = resp;
    //           draft.grid.source.total = resp.length;

    //           draft.grid.source.page = pageRequest.page;
    //           draft.grid.source.pageSize = pageRequest.pageSize;
    //           draft.grid.source.orderBy = pageRequest.orderBy;
    //           draft.grid.source.orderDir = pageRequest.orderDir;
    //           draft.grid.source.skip = pageRequest.skip;
    //         })
    //       );
    //     }),
    //     catchError((err) => {
    //       setState(
    //         produce(getState(), (draft) => {
    //           draft.grid.loading = false;
    //           //draft. = err;
    //         })
    //       );
    //       return throwError(err);
    //     })
    //   );
  }
}

export function GridRequestFromSource(
  source: IDataGridSource<any>,
  options: Partial<IDataGridSource<any>> = {
    page: undefined,
    pageSize: undefined,
    orderBy: undefined,
    orderDir: undefined,
  }
): any {
  return {
    page: options.page ? options.page : source.page,
    pageSize: options.pageSize ? options.pageSize : source.pageSize,
    orderBy: options.orderBy ? options.orderBy : source.orderBy,
    orderDir: options.orderDir ? options.orderDir : source.orderDir,
    sortField: options.orderBy ? options.orderBy : source.orderBy,
    sortDir: options.orderDir ? options.orderDir : source.orderDir,
    skip:
      options.skip != null && options.skip != undefined
        ? options.skip
        : source.skip,
  };
}
