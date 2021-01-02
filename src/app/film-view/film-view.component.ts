import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Film } from '../models/film.model';
import { FilmSevice } from '../services/film.service';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss']
})
export class FilmViewComponent implements OnInit {
  
  filmSubscription$ : Observable<Film[]>;
  
  constructor (private filmsService : FilmSevice){

  }

  ngOnInit(){
    this.filmSubscription$ = this.filmsService.getFilmFromServer();
  } 
  
  isAuth = false;
}
