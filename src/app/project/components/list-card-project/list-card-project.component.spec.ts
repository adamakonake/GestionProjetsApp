import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardProjectComponent } from './list-card-project.component';

describe('ListCardProjectComponent', () => {
  let component: ListCardProjectComponent;
  let fixture: ComponentFixture<ListCardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
