import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {RecipeModel} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://ntl001-186700.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://ntl001-186700.firebaseio.com/recipes.json?auth=' + token).subscribe(
      (recipes: RecipeModel[]) => this.recipeService.setRecipes(recipes)
    );
  }
}
