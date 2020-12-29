import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor() { }

  @Input() film: Film;
  @Input() indexOfFilm : number;
  @Input() id : number;

  ngOnInit(): void {
  }

}
