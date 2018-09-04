import {RecipeModel} from './recipe.model';
import {Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';
import {RecipeListComponent} from './recipe-list/recipe-list.component';

@Injectable()
export class RecipeService {
  recipesChange = new Subject<RecipeModel[]>();

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
  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChange.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChange.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChange.next(this.recipes.slice());
  }
  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChange.next(this.recipes.slice());
  }

}
