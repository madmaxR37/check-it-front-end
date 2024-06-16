import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigationsComponent } from './litigations.component';

describe('LitigationsComponent', () => {
  let component: LitigationsComponent;
  let fixture: ComponentFixture<LitigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LitigationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LitigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
