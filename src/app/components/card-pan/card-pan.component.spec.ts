import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPanComponent } from './card-pan.component';

describe('CardPanComponent', () => {
  let component: CardPanComponent;
  let fixture: ComponentFixture<CardPanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
