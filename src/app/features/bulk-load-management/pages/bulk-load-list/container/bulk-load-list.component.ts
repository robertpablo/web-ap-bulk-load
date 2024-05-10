import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgbdSortableHeader, SortEvent } from '../services/sortable.directive';
import { CountryService } from '../services/country.service';
import { Observable } from 'rxjs';
import { Country } from '../services/country';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BulkLoadFilterComponent } from '../components/bulk-load-filter/bulk-load-filter.component';
import {
  PageHeaderComponent,
  RpbjPageWrapper,
} from '@ropabajo/shared/components';

@Component({
  standalone: true,
  selector: 'rpbj-bulk-load-list',
  templateUrl: './bulk-load-list.component.html',
  imports: [
    PageHeaderComponent,
    DecimalPipe,
    FormsModule,
    AsyncPipe,
    NgbHighlight,
    NgbdSortableHeader,
    NgbPaginationModule,
    RpbjPageWrapper,
    BulkLoadFilterComponent,
  ],
})
export class BulkLoadListComponent {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header: any) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
