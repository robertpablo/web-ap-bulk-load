import { Injectable } from '@angular/core';

interface ErrorDetalleModel {
  campo?: string;
  mensaje?: string;
}

interface Alerta {
  message?: string;
  classname?: string;
  delay?: number;
  title?: string;
  errores?: ErrorDetalleModel[];
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Alerta[] = [];

  success(message: string, duration = 5000) {
    this.show(message, 'bg-alert-success mb-1', duration);
  }

  error(
    message: string = 'Error',
    errores: ErrorDetalleModel[] = [],
    delay = 5000
  ) {
    this.show(message, 'bg-alert-danger mb-1', delay, errores);
  }

  warning(message: string, errores: ErrorDetalleModel[] = [], duration = 6000) {
    this.show(message, 'bg-alert-warning mb-1', duration, errores);
  }

  info(message: string = '', errores: ErrorDetalleModel[] = [], delay = 5000) {
    this.show(message, 'bg-alert-info mb-1', delay, errores);
  }

  show(
    message: string,
    clasname: string,
    delay: number,
    errores?: ErrorDetalleModel[]
  ) {
    const newToast: Alerta = { message, classname: clasname, delay };
    if (errores) {
      newToast.errores = errores;
    }
    this.toasts.push(newToast);
  }

  showListError(errores: ErrorDetalleModel[], delay: number, message?: string) {
    this.toasts.push({
      message: message,
      classname: 'bg-alert-danger mb-1',
      delay: delay,
      errores: errores,
    });
  }

  remove(toast: any | null) {
    this.toasts = this.toasts.filter((t) => t != toast);
  }
}
