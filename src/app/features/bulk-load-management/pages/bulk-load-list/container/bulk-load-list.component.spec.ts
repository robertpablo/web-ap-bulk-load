import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkLoadListComponent } from './bulk-load-list.component';

describe('BulkLoadListComponent', () => {
  let component: BulkLoadListComponent;
  let fixture: ComponentFixture<BulkLoadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkLoadListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkLoadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
