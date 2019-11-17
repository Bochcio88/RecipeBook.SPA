import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Output('recipeWasSelected') recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', ' A test recipe description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_9PykBz1hNf36ylrfXnKWoojsLFJfPbaOHygppbWLj9ibDYdp'),
    new Recipe('A test recipe 2', ' A test recipe description 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_9PykBz1hNf36ylrfXnKWoojsLFJfPbaOHygppbWLj9ibDYdp')
  ]
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
