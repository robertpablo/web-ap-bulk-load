import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppBaseButtonComponent } from '../buttons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  standalone: true,
  imports: [AppBaseButtonComponent, CommonModule],
})
export class AppTopBarComponent {
  @Input() title: string = '';
  @Input() caption: string = '';
  @Input() cancelLabel: string = 'Cancelar';
  @Input() successLabel: string = 'Guardar';
  @Input() successShow: boolean = true;

  @Output('on-cancel') onClickCancelEvent: EventEmitter<any> =
    new EventEmitter();

  @Output('on-success') onClickSuccessEvent: EventEmitter<any> =
    new EventEmitter();

  constructor() {}

  handlerCancel() {
    this.onClickCancelEvent.emit(undefined);
  }

  handlerSuccess() {
    this.onClickSuccessEvent.emit(undefined);
  }
}
