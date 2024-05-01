import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digimon-card',
  standalone: true,
  imports: [],
  templateUrl: './digimon-card.component.html',
  styleUrl: './digimon-card.component.css'
})
export class DigimonCardComponent {
  @Input() public foto: string = "";
  @Input() public nome: string = "";
  @Input() public level: string = "";
  @Input() numDigimonsPorLinha: number = 5;
}

