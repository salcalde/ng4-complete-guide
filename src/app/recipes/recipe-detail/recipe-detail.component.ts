import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor() {
    console.log('constructor called');
   }

  ngOnInit() {
    console.log('ngOnInit called');
  }

}
