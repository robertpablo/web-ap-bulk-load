import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonNewComponent } from 'src/app/shared/components/buttons';

@Component({
  selector: 'rpbj-bulk-load-button',
  templateUrl: './bulk-load-button.component.html',
  styleUrls: ['./bulk-load-button.component.scss'],
  standalone: true,
  imports: [AppButtonNewComponent, NgbTooltipModule],
})
export class BulkLoadButtonComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  handlerNuevo = () => {
    this.router.navigate(['../add'], {
      relativeTo: this.activatedRoute,
    });
  };
}
