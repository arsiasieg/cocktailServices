export class Cocktail {
    name: string;
    price: number;
    description: string;
    img: string;

    constructor(public nameCocktail: string, price: number, description: string, img: string){
        this.name = this.nameCocktail
        this.price = price
        this.description = description
        this.img = img
    }
}