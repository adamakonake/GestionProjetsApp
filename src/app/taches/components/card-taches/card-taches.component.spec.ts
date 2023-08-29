import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTachesComponent } from './card-taches.component';

describe('CardTachesComponent', () => {
  let component: CardTachesComponent;
  let fixture: ComponentFixture<CardTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTachesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
