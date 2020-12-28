import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmSevice } from '../services/film.service';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss']
})
export class SingleFilmComponent implements OnInit {

  name : string ;
  actor : string;

  constructor(private filmService : FilmSevice, private routeActivated : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routeActivated.snapshot.params['id'];
    this.name = this.filmService.getFilmById(+id).filmName;
    this.actor = this.filmService.getFilmById(+id).actorList;
  }

}
