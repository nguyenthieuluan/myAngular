import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor( private  route: ActivatedRoute,
               private recipeService: RecipeService,
               private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredient = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredient']) {
        for ( const ingerdient of recipe.ingredient ) {
          recipeIngredient.push(
            new FormGroup({
              'name': new FormControl(ingerdient.name, Validators.required),
              'amount': new FormControl(ingerdient.amount, [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredient': recipeIngredient
    });
  }
  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      notify('updated!');
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
      notify('done!');
    }
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredient')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
    notify('added!');
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredient')).removeAt(index);
  }



}
