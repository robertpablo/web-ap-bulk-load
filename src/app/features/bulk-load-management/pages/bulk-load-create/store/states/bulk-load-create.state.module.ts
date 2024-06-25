import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BulkLoadCreateState } from './bulk-load-create.state';

@NgModule({
  imports: [NgxsModule.forFeature([BulkLoadCreateState])],
})
export class BulkLoadCreateStateModule {}
