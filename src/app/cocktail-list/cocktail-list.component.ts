import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {

  cocktails: any[];

  constructor(public cocktail : CocktailService) {
    this.cocktails = cocktail.getCocktails();
   }

}
