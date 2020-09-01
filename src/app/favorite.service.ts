import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
/*using BehaviorSubject to subscribe on changes on LocalStorage*/
  favor = new BehaviorSubject([]);
  items = [];
    constructor() {
      this.favor.next(JSON.parse(localStorage.getItem("favor"))); 

  

  }
 addToFav(movie) {
   
   if (!localStorage.getItem("favor")) {
     localStorage.setItem("favor", JSON.stringify([]));
   }
 
        localStorage.setItem("favor", JSON.stringify([...JSON.parse(localStorage.getItem("favor")),movie]));
      this.favor.next(JSON.parse(localStorage.getItem("favor"))); //pushing changes into variable for subscribing later
 

 }
 /*delete from LocalStorage*/
 removeItem(Id){
    var favor = JSON.parse(localStorage.getItem("favor"));
    var index = favor.findIndex(x => x.Id == Id);

    favor.splice(index, 1);
    localStorage.setItem("favor", JSON.stringify(favor))
   return this.favor.next(JSON.parse(localStorage.getItem("favor")));
  }
getItems(){
  
return JSON.parse(localStorage.getItem("favor"));
}
  clearFav() {
    localStorage.clear();console.log(localStorage)
    return this.favor.next(JSON.parse(localStorage.getItem("favor"))); 
  }
  
   check(movie){
     var favor = JSON.parse(localStorage.getItem("favor"));
if (favor ==null) return -1
else {
    return favor.findIndex(x => x.Id == movie.Id);
    
    
    }
   }
   /*counting the total price*/
  countTotal(){
 
    return this.getItems().reduce((res, val: any) => res + val.price, 0)
  }
}
