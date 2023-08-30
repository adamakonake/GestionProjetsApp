import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheDetailDialogComponent } from './tache-detail-dialog.component';

describe('TacheDetailDialogComponent', () => {
  let component: TacheDetailDialogComponent;
  let fixture: ComponentFixture<TacheDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
