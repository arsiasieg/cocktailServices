import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './shared/models/Cocktail.model';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { 
  }

  //Grâce à cette fonction, on vient récupérer les données de cocktails.json (un tableau de cocktails en l'occurence)
  public getCocktails():Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>('assets/cocktails.json')
  }
}
