export namespace BulkLoadListStoreActions {

  export namespace BulkLoadList {

    export class PaginatedGrid {
      static readonly type = '[RPBJ-STORE - BULK-LOAD LIST] PaginatedGrid';
      constructor(
        public payload: {
          skip?: number;
          page?: number;
          pageSize?: number;
          orderBy?: string;
          orderDir?: string;
        }
      ) {}
    }
  }
}
