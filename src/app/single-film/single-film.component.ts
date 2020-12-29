import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { FilmSevice } from '../services/film.service';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss']
})
export class SingleFilmComponent implements OnInit {

  film$: Observable<Film>;

  constructor(private filmService : FilmSevice, private routeActivated : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routeActivated.snapshot.params['id'];
    console.log(id);
    this.film$ = this.filmService.getFilmById(id);
  }

}
