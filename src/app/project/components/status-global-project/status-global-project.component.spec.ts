import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGlobalProjectComponent } from './status-global-project.component';

describe('StatusGlobalProjectComponent', () => {
  let component: StatusGlobalProjectComponent;
  let fixture: ComponentFixture<StatusGlobalProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusGlobalProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusGlobalProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
