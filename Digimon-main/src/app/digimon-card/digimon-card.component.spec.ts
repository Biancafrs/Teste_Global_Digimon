import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonCardComponent } from './digimon-card.component';

describe('PotterCardComponent', () => {
  let component: DigimonCardComponent;
  let fixture: ComponentFixture<DigimonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
