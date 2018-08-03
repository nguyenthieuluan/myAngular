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
      'https://www.gstatic.com/webp/gallery3/1.sm.png',
      [
        new IngredientModel('cherry', 3),
        new IngredientModel('banana', 3)
      ] ),
    new RecipeModel(
      'test name',
      'this is a test',
      'https://www.gstatic.com/webp/gallery3/3.sm.png',
      [
        new IngredientModel('egg', 2),
        new IngredientModel('meat', 0)
      ] ),
    new RecipeModel(
      'test name',
      'this',
      'https://www.gstatic.com/webp/gallery3/2.sm.png',
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
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
