import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarDadosApiService {
  private readonly url: string = 'https://digimon-api.vercel.app/api/digimon';
  private httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public getAllCharacters(): Observable<
    [
      {
        
        name: string;
        img: string;
        level:string;
      }
    ]
  > {
    return this.http.get<
      [
        {

          name: string;
          img: string;
          level:string;
        }
      ]
    >(this.url);
  }
}
