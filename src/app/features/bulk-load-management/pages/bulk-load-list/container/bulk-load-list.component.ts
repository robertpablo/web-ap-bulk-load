import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BulkLoadFilterComponent } from '../components/bulk-load-filter/bulk-load-filter.component';
import {
  PageHeaderComponent,
  RpbjPageWrapperComponent,
} from '@ropabajo/shared/components';
import { BulkLoadButtonComponent } from '../components/bulk-load-button/bulk-load-button.component';
import { BulkLoadTableComponent } from '../components';
import {
  BULK_LOAD_LIST_CONTAINER_STATE_TOKEN,
  BulkLoadListStoreActions,
  IBulkLoadList,
} from '../store';
import { Select, Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { BulkLoadListStateModule } from '../store/states/bulk-load-list.state.module';

@Component({
  standalone: true,
  selector: 'rpbj-bulk-load-list',
  templateUrl: './bulk-load-list.component.html',
  imports: [
    CommonModule,
    BulkLoadListStateModule,
    PageHeaderComponent,
    BulkLoadButtonComponent,
    RpbjPageWrapperComponent,
    BulkLoadFilterComponent,
    BulkLoadTableComponent,
  ],
})
export class BulkLoadListComponent implements OnInit {
  @Select(BULK_LOAD_LIST_CONTAINER_STATE_TOKEN) state$!: Observable<IBulkLoadList>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.loadGrid();
  }

  loadGrid = (e = {}) => {
    this.store.dispatch(
      new BulkLoadListStoreActions.BulkLoadList.PaginatedGrid(e)
    );
  };
}
