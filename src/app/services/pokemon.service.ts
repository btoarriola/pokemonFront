import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getPokemonList(index: number){
    const url = `${this.apiUrl}/${index}`;
    return this.http.get<any>(url);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getPokemonCount (){
    const data = this.http.get<any>(this.apiUrl);
    return data;
  }
}
