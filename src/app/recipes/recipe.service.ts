import {RecipeModel} from './recipe.model';

export class RecipeService {
  private recipes: RecipeModel[] = [ new RecipeModel('test name', 'this is simply a test', 'http://i529.photobucket.com/albums/dd336/jacksampath/work.jpg'),
    new RecipeModel('test name', 'this is a test', 'http://i529.photobucket.com/albums/dd336/jacksampath/work.jpg'),
    new RecipeModel('test name', 'this', 'https://miro.medium.com/fit/c/240/240/1*-SEJXCDJisHCnMhMEZe3ug.png') ];

  getRecipes() {
    return this.recipes.slice();
  }

}
