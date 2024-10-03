import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneAnimationComponent } from './plane-animation.component';

describe('PlaneAnimationComponent', () => {
  let component: PlaneAnimationComponent;
  let fixture: ComponentFixture<PlaneAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaneAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
