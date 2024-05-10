import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkLoadCreateComponent } from './bulk-load-create.component';

describe('BulkLoadCreateComponent', () => {
  let component: BulkLoadCreateComponent;
  let fixture: ComponentFixture<BulkLoadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkLoadCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkLoadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
