import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor() { }

  @Input() filmName :string;
  @Input() actorList :string;
  @Input() srcImg : string;
  @Input() indexOfFilm : number;
  @Input() id : number;

  ngOnInit(): void {
  }

}
