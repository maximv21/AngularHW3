import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavoriteService } from '../favorite.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['../app.component.scss']
  
})
export class MovieListComponent implements OnInit {
movies: any;fav;
/*Add to favorites*/
addToFav(movie) {
    this.favoriteService.addToFav(movie);
   
  }
  
  constructor( private http: HttpClient,
  private favoriteService: FavoriteService) { }
/*Loading data from JSON*/
  ngOnInit() {this.http.get("assets/movies.json").subscribe(data =>
      this.movies = data
      
    )
    this.getItems();
  }
  /*can put to favourite or take out depending on state*/
 toggle(movie){
     this.favoriteService.check(movie)==-1?this.addToFav(movie):
      
   this.favoriteService.removeItem(movie.Id)
  }
/*defines a state */
 getStat(movie) {
	
	if (this.fav==null||this.fav.findIndex(x => x.Id == movie.Id)==-1)  
	return "ADD"
	else return "DEL"
 
   
 }  
      getItems(){
     
   this.favoriteService.favor.subscribe((newCart) => { this.fav = newCart }) 

  

  }
    

}