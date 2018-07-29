import {IngredientModel} from '../shared/ingredient.model';

export class RecipeModel {
  public name: string;
  public  description: string;
  public imagePath: string;
  public ingredient: IngredientModel[];

  constructor(name: string, description: string, imagePath: string, ingredient: IngredientModel[])
  {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredient = ingredient;
  }
}
