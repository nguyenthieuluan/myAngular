import {RecipeModel} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'test name',
      'this is simply a test',
      'http://i529.photobucket.com/albums/dd336/jacksampath/work.jpg',
      [
        new IngredientModel('cherry', 3),
        new IngredientModel('banana', 3)
      ] ),
    new RecipeModel(
      'test name',
      'this is a test',
      'http://i529.photobucket.com/albums/dd336/jacksampath/work.jpg',
      [
        new IngredientModel('egg', 2),
        new IngredientModel('meat', 0)
      ] ),
    new RecipeModel(
      'test name',
      'this',
      'https://miro.medium.com/fit/c/240/240/1*-SEJXCDJisHCnMhMEZe3ug.png',
      [
        new IngredientModel('chicken', 2),
        new IngredientModel('potato', 2)
      ])
  ];

  constructor( private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
