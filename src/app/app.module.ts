import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './WarningAlert/WarningAlert.component';
import { SuccessAlertComponent } from './SuccessAlert/SuccessAlert.component';
import { TestComponent } from './test-component/test-component.component';
import { Practise2Component } from './practise-2/practise-2.component';
import { Practise3Component } from './practise-3/practise-3.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
   declarations: [
      AppComponent,
      WarningAlertComponent,
      SuccessAlertComponent,
      TestComponent,
      Practise2Component,
      Practise3Component,
      HeaderComponent,
      RecipesComponent,
      RecipesDetailComponent,
      RecipesListComponent,
      RecipesItemComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      CockpitComponent,
      ServerElementComponent,
      DropdownDirective
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
