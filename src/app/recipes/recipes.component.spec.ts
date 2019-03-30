import { RecipesComponent } from "./recipes.component";
import { TestBed, ComponentFixture, fakeAsync } from "@angular/core/testing";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RouterModule, Router } from "@angular/router";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeService } from "./recipe.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";

describe('Recipes component', () => {
    let component: RecipesComponent;
    let fixture: ComponentFixture<RecipesComponent>;
    let route = jasmine.createSpyObj('route', ['navigate'])
    const RecipeServiceStub = jasmine.createSpyObj('RecipeService', ['']);
    const ShoppingListServiceStub = jasmine.createSpyObj('ShoppingListService', ['']);
    beforeEach( fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                RecipesComponent,
                RecipeListComponent,
                RecipeItemComponent
            ],
            providers: [
                { provide: RecipeService, useValue: RecipeServiceStub },
                { provide: ShoppingListService, useValue: ShoppingListServiceStub },
                {provide: APP_BASE_HREF, useValue : '/' }
                // { provode: Router, useValue: route }
            ],
            imports: [
                RouterModule.forRoot([]),
                // NgModule
            ]
        }).compileComponents;
        
    }));
    beforeEach( () => {
        fixture = TestBed.createComponent(RecipesComponent);
        component = fixture.componentInstance;
    });
    it('should create recipes component', () => {
        component.ngOnInit();
        expect(component).toBeTruthy();
    });
    
});