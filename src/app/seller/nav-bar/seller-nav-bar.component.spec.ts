import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerNavBarComponent } from './seller-nav-bar.component';

describe('NavBarComponent', () => {
  let component: SellerNavBarComponent;
  let fixture: ComponentFixture<SellerNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
