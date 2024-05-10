import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkLoadButtonComponent } from './bulk-load-button.component';

describe('BulkLoadButtonComponent', () => {
  let component: BulkLoadButtonComponent;
  let fixture: ComponentFixture<BulkLoadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkLoadButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkLoadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
