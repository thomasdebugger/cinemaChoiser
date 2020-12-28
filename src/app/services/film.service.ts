import { Subject } from "rxjs";

export class FilmSevice{

  filmSubject = new Subject<any[]>();

  private films =[
        {
          id: 1,
          filmName : "Loup de wall street",
          actorList :"Leonardo Di Caprio",
          srcImg : "https://cutt.ly/Vh8v578"
        },
        {
          id: 2,
          filmName:"Interstellar",
          actorList:"Matthew McConaughey",
          srcImg : "https://cutt.ly/Wh8btfb"
        },
        {
          id: 3,
          filmName:"Joker",
          actorList:"Joaquin Phoenix",
          srcImg : "https://cutt.ly/Qh8byQe"
        }
      ];

  emitFilmSubject(){
    this.filmSubject.next(this.films.slice());
  }
  
  getFilmById(id: number){
    const film = this.films.find(
      (filmObject)=> {
        return filmObject.id === id;
      }
    );
    return film;

  }

  addFilm(filmName : string, actorName : string){
    const film = {
      id : 0,
      filmName : '',
      actorList : '',
      srcImg : ''
    }

    film.filmName = filmName;
    film.actorList = actorName;
    film.id = this.films[this.films.length-1].id + 1;

    this.films.push(film);
    this.emitFilmSubject(); 

  }

    
}