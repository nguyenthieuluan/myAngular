///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import { IngredientModel } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('list',[
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void=>*',[
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('*=>void',[
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])
    ])
  ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel[];
  private subscription: Subscription;

  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: IngredientModel[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
