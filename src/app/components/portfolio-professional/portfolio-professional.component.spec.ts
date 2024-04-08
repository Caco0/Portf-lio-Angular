import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProfessionalComponent } from './portfolio-professional.component';

describe('PortfolioProfessionalComponent', () => {
  let component: PortfolioProfessionalComponent;
  let fixture: ComponentFixture<PortfolioProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProfessionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
