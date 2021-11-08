import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../shared/models/Cocktail.model';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  //Tableau qui va accueillir les cocktails
  public cocktails: Cocktail[]

  constructor(private cocktailsService : CocktailService) {
    this.cocktails = []
   }

    ngOnInit(){
      //On récupère les données du service cocktailsService (donc du http donc du json donc le tableau de cocktails)
      this.cocktailsService.getCocktails().subscribe((cocktailsList) => {
        //On va boucler sur chaque élément du tableau de cocktail pour créer des objets de type Cocktail et les push dans notre tableau perso
        cocktailsList.forEach((cocktail: Cocktail) => {
          this.cocktails.push(new Cocktail(cocktail.name, cocktail.price, cocktail.description, cocktail.img))
        })
      })
    }
}
