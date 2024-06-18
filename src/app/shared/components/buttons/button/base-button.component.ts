import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { VARIANTS, ISize } from '@ropabajo/shared/enum';
import { PLACEMENT } from 'src/app/shared/enums';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
})
export class AppBaseButtonComponent implements OnInit {
  @Input() propTitle?: string = '';
  @Input() styleClass?: string = '';

  variants = VARIANTS;
  tooltipPositionEnum = PLACEMENT;

  @Input() variant: string = this.variants.NORMAL;
  @Input() label?: string = 'Limpiar';
  @Input() buttonType: string = 'button';
  @Input() icon?: string = 'refresh-ccw';
  @Input() color?: string = 'cancel';
  @Input() tooltip?: string = '';
  @Input() tooltipPosition: string = this.tooltipPositionEnum.TOP;
  @Input() disabled: boolean = false;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();
  @Input() size: ISize = 'medium';

  buttonClass: any;

  constructor() {}

  ngOnInit() {
    this.buttonClass = {};
    if (this.styleClass) {
      this.buttonClass[this.styleClass] = true;
    }
    this.styleClass = this.getClasses();
  }

  handleClick(e: any) {
    if (this.disabled) return;
    this.onClickEvent.emit(e);
  }

  getClasses() {
    const classes = ['btn'];

    const classVariant = this.getClassVariantColor(this.variant);

    if (classVariant) classes.push(classVariant);

    const classSize = this.getClassSize(this.size);
    if (classSize) classes.push(classSize);

    if (this.variant == this.variants.ICON) classes.push('btn-icon');

    //if (this.block) classes.push('w-100 d-flex');

    //if (this.classes.trim().length > 0) classes.push(this.classes);

    return classes.join(' ');
  }

  private getClassVariantColor(variant: string): string {
    if (variant === this.variants.ICON) {
      return `btn-outline-${this.color}`;
    }

    return `btn-${this.color}`;
  }

  private getClassSize(size: ISize) {
    switch (size) {
      case 'small':
        return 'btn-sm';
      case 'medium':
        return 'me-2';
      case 'large':
        return 'btn-lg';
      default:
        return '';
    }
  }
}
