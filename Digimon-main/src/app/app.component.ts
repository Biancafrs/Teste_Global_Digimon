import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DigimonCardComponent } from './digimon-card/digimon-card.component';
import { BuscarDadosApiService } from './buscar-dados-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  // ADICIONA O COMPONENT NO PROJETO
  imports: [CommonModule, RouterOutlet, DigimonCardComponent, HttpClientModule],
  providers: [BuscarDadosApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // LISTA QUE POSSO ACESSAR NO HTML
  public listaDeDados: Array<{ nome: string; level: string; foto: string; }> =
    [];
  public listaParaFiltrar: Array<{
    nome: string;
    level:string
    foto: string;
    

  }> = [];

  constructor(private searchService: BuscarDadosApiService) {}

  public souUmaFuncaDeClique() {
    this.searchService.getAllCharacters().subscribe(
      (res) => {
        this.listaDeDados = [];
        this.listaParaFiltrar = [];
        res.forEach((charact) => {
          console.log(charact.img);
          if (charact.img !== null && charact.level !== "") {
            this.listaDeDados.push({
              nome: charact.name,
              level: charact.level,
              foto: charact.img,
            });
            this.listaParaFiltrar.push({
              nome: charact.name,
              level: charact.level,
              foto: charact.img,
            });
          }
        });
      },
      (err) => console.error(err)
    );
  }
  
  public filtrarPorNome() {
    const dados = this.listaParaFiltrar.slice(); // Copiar a lista para evitar alterar a lista original
    this.listaDeDados = dados.sort((a, b) => a.nome.localeCompare(b.nome));
  }
  
  public filtrarPorLevel() {
    const nivelMap: { [key: string]: number } = {
      "Fresh": 1,
      "In Training": 2,
      "Rookie": 3,
      "Champion": 4,
      "Armor": 5,
      "Mega": 6,
      "Ultimate": 7,
    };
  
    const dados = this.listaParaFiltrar;
    this.listaDeDados = dados.sort((a, b) => {
      return nivelMap[a.level] - nivelMap[b.level];
    });
  }
  
  
  
}  
