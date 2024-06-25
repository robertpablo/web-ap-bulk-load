import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  host: { '[class.ngb-toasts]': 'true' },
})
export class AlertaComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any | null) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  geticon(clas: string | undefined) {
    if (clas != undefined)
      switch (clas.split(' ')[0]) {
        case 'bg-alert-success':
          return 'icon-check-circle';
        case 'bg-alert-warning':
          return 'icon-alert-triangle';
        case 'bg-alert-info':
          return 'icon-info';
        default:
          return 'icon-slash';
      }
    return '';
  }
}
