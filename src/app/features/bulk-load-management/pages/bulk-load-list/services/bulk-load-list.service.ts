import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { convertObjectToGetParams } from 'src/app/core';
import { BulkLoadConfigurationService } from 'src/app/core/services/bulk-load-configuration.service';

@Injectable()
export class BulkLoadListService {
  private url: string = `${this.configuration.apiBulkLoadAddress}/v1/sanluis-objects/bulk-loads`;

  constructor(
    private configuration: BulkLoadConfigurationService,
    private http: HttpClient
  ) {}

  getPagedBulkLoads = (page: any): Observable<any> => {
    return this.http.get<any>(this.url, {
      params: convertObjectToGetParams(page),
    });
  };
}