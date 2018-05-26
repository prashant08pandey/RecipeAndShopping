import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('first recipe', 'This is just a test recipe', 'http://www.indianfoodforever.com/images/rainy-recipes.jpg'),
    new Recipe('Special Momos', 'Don\'t ask for Chutney again and again','https://tfv.goodblogscdn.com/sites/www.theflamingvegan.com/post_images/cropped/4708.jpg?v=1467025034'),
    new Recipe('Rajma Chawal', 'Best of punjabis','http://www.secondrecipe.com/wp-content/uploads/2017/06/rajma-chawal.jpg'),
    new Recipe('Pani Puri', 'Best of Mumbai','http://lookandcook.com/wp-content/uploads/2014/10/LC14026-main1.jpg')
	];

	@Output() finalRcpSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(rcpSelected : Recipe){
  		this.finalRcpSelected.emit(rcpSelected);
  }

}
