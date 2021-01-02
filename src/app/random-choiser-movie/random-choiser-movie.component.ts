import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { FilmSevice } from '../services/film.service';

@Component({
  selector: 'app-random-choiser-movie',
  templateUrl: './random-choiser-movie.component.html',
  styleUrls: ['./random-choiser-movie.component.scss']
})
export class RandomChoiserMovieComponent implements OnInit {

  constructor(private filmsService : FilmSevice) { }


  films : Film[];
  filmSubscription$ : Observable<Film[]>;

  ngOnInit(): void {
    this.filmsService.getFilmFromServer().subscribe(
      (response) => {
        this.films = response;
      }
    );
  }


  pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
  }
  
  randomPicker(){
    console.log(this.films)
    console.log(this.pickRandomProperty(this.films))
    console.log(this.films.length);

    var array = []; 
    for (var key in this.films) 
    array[key] = this.films[key]; 
  }


}
