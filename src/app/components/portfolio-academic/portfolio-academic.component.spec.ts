import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAcademicComponent } from './portfolio-academic.component';

describe('PortfolioAcademicComponent', () => {
  let component: PortfolioAcademicComponent;
  let fixture: ComponentFixture<PortfolioAcademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioAcademicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
