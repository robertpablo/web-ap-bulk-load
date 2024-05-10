import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RpbjFilter } from '@ropabajo/shared/components';

@Component({
  selector: 'rpbj-bulk-load-filter',
  standalone: true,
  templateUrl: './bulk-load-filter.component.html',
  imports: [RpbjFilter, NgSelectModule, ReactiveFormsModule],
})
export class BulkLoadFilterComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      formatCode: [null],
    });
  }
}
