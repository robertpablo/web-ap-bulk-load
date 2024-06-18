import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppTopBarComponent } from 'src/app/shared';

@Component({
  selector: 'rpbj-bulk-load-create',
  templateUrl: './bulk-load-create.component.html',
  styleUrl: './bulk-load-create.component.scss',
  standalone: true,
  imports: [AppTopBarComponent],
})
export class BulkLoadCreateComponent {
  title: string = 'Crear carga de personas';
  caption: string = 'Cargue sus personas';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  handlerCancelar() {
    this.router.navigate(['../list'], {
      relativeTo: this.activatedRoute,
    });
  }
}
