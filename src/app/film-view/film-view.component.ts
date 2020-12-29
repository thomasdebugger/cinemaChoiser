import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmSevice } from '../services/film.service';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss']
})
export class FilmViewComponent implements OnInit {
  
  films :any[];
  filmSubscription : Subscription;
  
  constructor (private filmsService : FilmSevice){

  }

  ngOnInit(){
    this.filmSubscription = this.filmsService.filmSubject.subscribe(
      (films :any []) =>{
        this.films = films 
      }
    );
    this.filmsService.emitFilmSubject();
    this.filmsService.getFilmFromServer();
  } 
  isAuth = false;

  onSave(){
    this.filmsService.saveFilmOnServer();
  }

}
