import { Component, OnInit } from '@angular/core';
import { RpbjDataGridComponent } from '@ropabajo/shared/components';
import { BULK_LOAD_CONTAINER_STATE_TOKEN } from '../../store';
import { IDataGridButtonEvent } from '@ropabajo/shared/interfaces';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

@Component({
  selector: 'rpbj-bulk-load-table',
  templateUrl: './bulk-load-table.component.html',
  standalone: true,
  imports: [RpbjDataGridComponent, CommonModule],
})
export class BulkLoadTableComponent implements OnInit {
  readonly state$ = this.store.select(BULK_LOAD_CONTAINER_STATE_TOKEN);

  constructor(private store: Store) {}

  ngOnInit() {
    //this.loadGrid();
  }

  handleLoadData = (e: any) => {
    console.log(e, 'handleLoadData');
  };

  handleButtons = (e: IDataGridButtonEvent) => {
    console.log(e, 'handleButtons');
  };
}
