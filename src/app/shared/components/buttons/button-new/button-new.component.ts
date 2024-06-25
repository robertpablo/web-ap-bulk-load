import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VARIANTS, PLACEMENT } from '@ropabajo/shared/enum';
import { AppBaseButtonComponent } from '../button/base-button.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-button-new',
  templateUrl: './button-new.component.html',
  standalone: true,
  imports: [AppBaseButtonComponent, NgbTooltipModule],
})
export class AppButtonNewComponent {
  variants = VARIANTS;
  tooltipPositionEnum = PLACEMENT;

  @Input() variant: string = this.variants.NORMAL;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();
  @Input() buttonType: string = 'button';
  @Input() label?: string = 'Agregar';
  @Input() disabled: boolean = false;

  @Input() color?: string = 'primary';
  @Input() icon?: string = 'plus';
  @Input() tooltip?: string = '';
  @Input() tooltipPosition: string = this.tooltipPositionEnum.RIGHT;

  constructor() {}

  handleClick(e: any) {
    this.onClickEvent.emit(e);
  }
}
