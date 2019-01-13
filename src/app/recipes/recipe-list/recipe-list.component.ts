import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { RecipeModel } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: RecipeModel[];
  subscription: Subscription;
  constructor( private recipesService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipesService.recipesChange.subscribe(
      (recipes: RecipeModel[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipesService.getRecipes();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
