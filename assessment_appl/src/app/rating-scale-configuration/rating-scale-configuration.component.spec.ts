import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingScaleConfigurationComponent } from './rating-scale-configuration.component';

describe('RatingScaleConfigurationComponent', () => {
  let component: RatingScaleConfigurationComponent;
  let fixture: ComponentFixture<RatingScaleConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingScaleConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingScaleConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
