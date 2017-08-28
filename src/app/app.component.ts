import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipeClicked = false;
  shoppingListClicked = false;

  whichClicked(clickData: {componentClicked: String}) {
    if (clickData.componentClicked == 'recipes') {
      this.shoppingListClicked = false;
      this.recipeClicked = true;
    } else if (clickData.componentClicked == 'shopping list') {
      this.recipeClicked = false;
      this.shoppingListClicked = true;
    }
  }

}
