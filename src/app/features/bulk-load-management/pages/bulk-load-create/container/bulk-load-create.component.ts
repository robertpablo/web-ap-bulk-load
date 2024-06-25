import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ChangeEventData } from '@ropabajo/shared/interfaces';
import { BytesFormatPipe } from '@ropabajo/shared/pipe';
import { AppTopBarComponent } from 'src/app/shared';
import { AppUploaderComponent } from 'src/app/shared/components/uploader/uploader.component';
import { BulkLoadCreateStoreActions, IBulkLoadCreate } from '../store';
import { Observable } from 'rxjs';
import { BULK_LOAD_CREATE_CONTAINER_STATE_TOKEN } from '../store/states/bulk-load-create.state';
import { Select, Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { BulkLoadCreateStateModule } from '../store/states/bulk-load-create.state.module';

@Component({
  selector: 'rpbj-bulk-load-create',
  templateUrl: './bulk-load-create.component.html',
  styleUrl: './bulk-load-create.component.scss',
  standalone: true,
  imports: [
    AppTopBarComponent,
    AppUploaderComponent,
    BytesFormatPipe,
    NgSelectModule,
    CommonModule,
    BulkLoadCreateStateModule,
  ],
})
export class BulkLoadCreateComponent implements OnInit {
  @Select(BULK_LOAD_CREATE_CONTAINER_STATE_TOKEN)
  state$!: Observable<IBulkLoadCreate>;

  title: string = 'Crear carga de personas';
  caption: string = 'Cargue sus personas';

  allowedMimeType: string[] = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];
  maxFileSize: number = 1 * 1024 * 1024;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(
      new BulkLoadCreateStoreActions.BulkLoadCreate.GetFormats()
    );
  }

  handlerCancelar() {
    this.router.navigate(['../list'], {
      relativeTo: this.activatedRoute,
    });
  }

  handleFileChange(event: ChangeEventData) {
    if (event.action === 'add') {
      console.log('File added:', event.item);
    } else if (event.action === 'delete') {
      console.log('File deleted');
    }
  }
}
