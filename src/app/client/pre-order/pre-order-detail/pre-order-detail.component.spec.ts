import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOrderDetailComponent } from './pre-order-detail.component';

describe('PreOrderDetailComponent', () => {
  let component: PreOrderDetailComponent;
  let fixture: ComponentFixture<PreOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreOrderDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
