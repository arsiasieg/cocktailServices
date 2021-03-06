import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  listCocktails = [
    {name : "Martini", price : 5, description: "blablablablablabla blablablablablabla blablablablablabla", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/15-09-26-RalfR-WLC-0095.jpg/280px-15-09-26-RalfR-WLC-0095.jpg"},
    {name : "Mojito fraises", price : 7, description: "blablablablablabla blablablablablabla blablablablablabla", img : "https://www.atelierdeschefs.com/media/recette-e24638-virgin-mojito-fraises-et-framboises.jpg"},  ];

  constructor() { 
  }

  public getCocktails(){
    return this.listCocktails;
  }
}
