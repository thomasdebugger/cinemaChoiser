import { Observable } from "rxjs";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Film } from "../models/film.model";
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';

@Injectable()
export class FilmSevice{

  constructor(private httpClient : HttpClient){
  }

  // filmSubject = new Subject<any[]>();

  // private films = [];

  // emitFilmSubject(){
  //   this.filmSubject.next(this.films);
  // }
  
  getFilmById(id: string): Observable<Film> {
    return this.httpClient.get<Film>(`https://cinema-56d52-default-rtdb.firebaseio.com/films.json`).pipe(map(films => films[id]));
  }

  // addFilm(film : Film){
  //     this.films.push(film);
  //     // this.emitFilmSubject();
  // }

  saveFilmOnServer(film: Film): Observable<any>{
    return this.httpClient.post('https://cinema-56d52-default-rtdb.firebaseio.com/films.json', film);
  }

  getFilmFromServer() : Observable<Film[]>{
    return this.httpClient.get<Film[]>('https://cinema-56d52-default-rtdb.firebaseio.com/films.json');
  }

/*firebase-- intégration*/

  saveFilm(film : Film){
    firebase.database().ref('/films').set(film);
  }
  getFilms(){
    firebase.database().ref('/films').on('value', (data)=>{
      return data.val();
    });
  }

  getFilmsByID(id : number){
    return new Promise(
      (resolve, reject)=>{
        firebase.database().ref('/films/'+ id).once('value').then(
          (data)=>{
            resolve(data.val());
          },
          (error)=> {
            reject(error);
          }
        )
      }
    );
  }

}