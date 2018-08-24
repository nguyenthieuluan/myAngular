import {IngredientModel} from '../shared/ingredient.model';
import { Subject } from 'rxjs';
// noinspection TypeScriptCheckImport

export class ShoppingListService {
  ingredientsChanged = new Subject<IngredientModel[]>();
  startEditing = new Subject<number>();

  private ingredients: IngredientModel[] = [
    new IngredientModel('banana', 20),
    new IngredientModel('avocado', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients( ingredients: IngredientModel[] ) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
