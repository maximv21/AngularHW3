import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MovieListComponent } from './movie-list/movie-list.component';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule,  ReactiveFormsModule ],
  declarations: [ AppComponent, MovieListComponent, FavoriteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
