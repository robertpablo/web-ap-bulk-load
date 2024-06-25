import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BulkLoadConfigurationService } from 'src/app/core';

@Injectable({
  providedIn: 'root',
})
export class BulkLoadCreateService {
  private urlBulkLoad: string = `${this.configuration.apiBulkLoadAddress}/v1/sanluis-objects/bulk-loads`;
  private urlObject: string = `${this.configuration.apiBulkLoadAddress}/v1/sanluis-objects`;
  private urlFormat: string = `${this.configuration.apiBulkLoadAddress}/v1/sanluis-objects/formats`;

  constructor(
    private configuration: BulkLoadConfigurationService,
    private http: HttpClient
  ) {}

  postBulkLoads(request: any) {
    //4
    return this.http.post(this.urlBulkLoad, request);
  }

  postObjects(request: any) {
    //1
    return this.http.post(this.urlObject, request, {
      observe: 'response' as 'body',
    });
  }

  saveToBucket(url: any, objCreate: any) {
    //2
    const headers = {
      authorization: ``,
    };

    url = url.substring(0, url.length - 1);

    return this.http.post<any>(url, objCreate, {
      headers,
    });
  }

  patchStateUploaded(objectCode: any) {
    //3
    return this.http.patch<any>(
      `${this.urlObject}/${objectCode}/state/uploaded`,
      null
    );
  }

  getFormats() {
    return this.http.get<any>(`${this.urlFormat}`);
  }
}
