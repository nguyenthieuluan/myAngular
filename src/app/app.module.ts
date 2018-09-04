import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LuanComponent } from './Test/luan.component';
import {ServerService} from './service/server.service';
import {HttpClientModule} from '@angular/common/http';
import {DevComponent} from './dev/dev.component';
import {DevExtremeModule, DxButtonModule} from 'devextreme-angular';
import {AngularFireModule} from 'angularfire2';

import { environment } from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipesStartComponent,
    RecipesEditComponent,
    LuanComponent,
    DevComponent,
    UserProfileComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DevExtremeModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxButtonModule,
    AngularFireModule.initializeApp(environment.firebase, 'myAngular'),
    AngularFireAuthModule,
  ],
  providers: [ShoppingListService, ServerService, AuthService, RecipeService, AuthGuard, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
