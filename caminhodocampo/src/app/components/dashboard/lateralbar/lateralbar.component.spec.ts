import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralbarComponent } from './lateralbar.component';

describe('LateralbarComponent', () => {
  let component: LateralbarComponent;
  let fixture: ComponentFixture<LateralbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
