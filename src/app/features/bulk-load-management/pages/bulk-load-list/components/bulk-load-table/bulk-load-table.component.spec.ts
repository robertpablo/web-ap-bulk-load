import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkLoadTableComponent } from './bulk-load-table.component';

describe('BulkLoadTableComponent', () => {
  let component: BulkLoadTableComponent;
  let fixture: ComponentFixture<BulkLoadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkLoadTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkLoadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
