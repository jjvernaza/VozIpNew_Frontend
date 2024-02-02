import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosCardsComponent } from './beneficios-cards.component';

describe('BeneficiosCardsComponent', () => {
  let component: BeneficiosCardsComponent;
  let fixture: ComponentFixture<BeneficiosCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficiosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
