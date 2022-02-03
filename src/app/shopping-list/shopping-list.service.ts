import { EventEmitter } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    let exists: boolean = false;
    let that = this;

    let newIngr = parseInt(Object.entries(ingredient)[1][1]);

    that.ingredients.forEach((ingr, key) => {
      if (ingr['name'] == ingredient['name']) {
        ingr['amount'] += newIngr;
        exists = true;
      }
      if (!exists) {
      }
    });
    that.ingredients.push(ingredient);
    console.log(that.ingredients);
    // this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    //not the best logic because it sends a lot of event emissions
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    let exist: boolean = false;
    let that = this;
    //debugger;
    console.log(this.ingredients);
    ingredients.forEach(function (newIngr, newKey) {
      exist = false;
      console.log(newIngr);
      that.ingredients.forEach(function (ingr, key) {
        if (ingr['name'] == newIngr['name']) {
          ingr['amount'] += newIngr['amount'];
          exist = true;
        }
      });
      if (!exist) {
        that.ingredients.push(newIngr);
        console.log(that.ingredients);
      }
    });
    // this.ingredientsChanged.emit(this.ingredients.slice());
    console.log(this.ingredients.slice());
    // this.ingredients.push(...ingredients);
    //write logic to check and see if item has been added already and add onto the item if it has been
  }
}
