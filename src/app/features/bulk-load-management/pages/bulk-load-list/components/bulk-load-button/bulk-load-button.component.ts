import { Component } from '@angular/core';
import {
  RpbjBaseButtonComponent,
  RpbjButtonNewComponent,
} from '@ropabajo/shared/components';

@Component({
  selector: 'rpbj-bulk-load-button',
  templateUrl: './bulk-load-button.component.html',
  standalone: true,
  imports: [RpbjBaseButtonComponent, RpbjButtonNewComponent],
})
export class BulkLoadButtonComponent {}
