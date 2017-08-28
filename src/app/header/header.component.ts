import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() linkClicked = new EventEmitter<{componentClicked: string}>();

  constructor() { }

  ngOnInit() {
  }

  getLink(event: MouseEvent) {
    console.log(event);
     if (event.srcElement.textContent == 'Recipes') {
      this.linkClicked.emit({componentClicked: 'recipes'});
    } else if (event.srcElement.textContent == 'Shopping List') {
      this.linkClicked.emit({componentClicked: 'shopping list'});
    } 
  }

}
