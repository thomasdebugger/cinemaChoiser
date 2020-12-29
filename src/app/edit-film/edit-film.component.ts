import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from '../models/film.model';
import { FilmSevice } from '../services/film.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {

  filmForm : FormGroup;

  constructor( private filmService : FilmSevice, private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.initForm()

  }

  initForm(){
    this.filmForm = this.formBuilder.group(
      {
        filmName : ['', Validators.required],
        realisator : ['', Validators.required],
        release : ['', Validators.required],
        actorList : this.formBuilder.array([]),
        filmCategory : this.formBuilder.array([]),
        srcImg : ['', Validators.required],
      }
    )
  }

  onSubmitForm(){
    const formValue = this.filmForm.value;
    const film = new Film(
      formValue['filmName'],
      formValue['realisator'],
      formValue['release'],
      formValue['actorList'],
      formValue['filmCategory'],
      formValue['srcImg'],
    );
    this.filmService.addFilm(film);
    this.filmService.saveFilmOnServer();
    this.router.navigate(['/films']);
  }

  getActorList(){
    return this.filmForm.get('actorList') as FormArray;
  }

  onAddActorList(){
    const newActorListControl = this.formBuilder.control('', Validators.required);
    this.getActorList().push(newActorListControl);
  }

  getFilmCategory(){
    return this.filmForm.get('filmCategory') as FormArray;
  }

  onAddFilmCategory(){
    const newFilmCategoryControl = this.formBuilder.control('', Validators.required);
    this.getFilmCategory().push(newFilmCategoryControl);
  }




}
