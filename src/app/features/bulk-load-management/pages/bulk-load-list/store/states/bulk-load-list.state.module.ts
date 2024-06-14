import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BulkLoadListState } from './bulk-load-list.state';

@NgModule({
  imports: [NgxsModule.forFeature([BulkLoadListState])],
})
export class BulkLoadListStateModule {}
