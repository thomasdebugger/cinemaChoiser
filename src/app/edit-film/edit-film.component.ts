import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmSevice } from '../services/film.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {

  constructor( private filmService : FilmSevice, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    const filmName = form.value['filmName'];
    const actorName = form.value['actorName'];

    this.filmService.addFilm(filmName,actorName);
    this.router.navigate(['films']);
  }

}
