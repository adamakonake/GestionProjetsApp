import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressRadiusBarComponent } from './progress-radius-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressRadiusBarComponent;
  let fixture: ComponentFixture<ProgressRadiusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressRadiusBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressRadiusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
