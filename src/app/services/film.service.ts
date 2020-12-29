import { Subject } from "rxjs";
import { HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Film } from "../models/film.model";

@Injectable()
export class FilmSevice{

  constructor(private httpClient : HttpClient){

  }

  filmSubject = new Subject<any[]>();

  private films = [];

  emitFilmSubject(){
    this.filmSubject.next(this.films);
  }
  
  getFilmById(id: number){
    const film = this.films.find(
      (filmObject)=> {
        return filmObject.id === id;
      }
    );
    return film;

  }

  addFilm(film : Film){
      this.films.push(film);
      this.emitFilmSubject();
  }

  saveFilmOnServer(){
    this.httpClient.put('https://cinema-56d52-default-rtdb.firebaseio.com/films.json', this.films).subscribe(
      ()=>{
        console.log('enregistrement terminé');
      },
      (erreur) => {
        console.log('erreur de sauvagarde : ', erreur)
      }
    );
  }

  getFilmFromServer(){
    this.httpClient.get<any[]>('https://cinema-56d52-default-rtdb.firebaseio.com/films.json').subscribe(
      (response)=>{
        this.films = response;
        this.emitFilmSubject();
      },
      (erreur)=>{
        console.log('erreur de chargement !', erreur);
      }
    );
  }

    
}