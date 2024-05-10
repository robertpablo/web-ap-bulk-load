import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkLoadFilterComponent } from './bulk-load-filter.component';

describe('BulkLoadFilterComponent', () => {
  let component: BulkLoadFilterComponent;
  let fixture: ComponentFixture<BulkLoadFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkLoadFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkLoadFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
