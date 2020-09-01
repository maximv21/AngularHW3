import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['../app.component.scss'],
  
})
export class FavoriteComponent implements OnInit {
items;sum;visible = true;
  constructor(private favoriteService: FavoriteService) { }
	/*Clearing list of favorites*/
clearFav() {
    
  this.favoriteService.clearFav();
   this.favoriteService.favor.subscribe((newCart) => { this.items = newCart });  
  }
  /*Deleting movie from the list*/
  deleteItem(Id){
    this.favoriteService.removeItem(Id);
  
    this.favoriteService.favor.subscribe((newCart) => { this.items = newCart }); 
  }
    
  
  
  ngOnInit() {
  this.getItems()
  }  
		/*take all the data from favorites*/
   getItems(){
     
   this.favoriteService.favor.subscribe((newCart) => { this.items = newCart });  
  }
	getTotal(){return this.favoriteService.countTotal()}
	/*Toggle visibility of favorite list*/
	visib() : void {
        this.visible = !this.visible;
        
    }
}

