import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor() {
    const localMovies = JSON.parse(localStorage['movies'])
    if(localMovies){
      this.movies.next(localMovies) 
    }
  }

  ngOnInit() {}

  movies: any = new BehaviorSubject([
    {
      id: '1',
      title: 'The Batman',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
      release: '2022-3-4',
      boxOffice: 738423730,
      actors: ['Some Guy'],
      creationDate: '2022-3-4',
    },
    {
      id: '2',
      title: 'The Shawshank Redemption',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      release: '1995-3-3',
      boxOffice: 28341469,
      actors: ['Some Guy'],
      creationDate: '2022-3-4',
    },
  ])
  
  moviesObs = this.movies.asObservable();

  getFilms = () => {
    return this.moviesObs;
  };

  addMovie = (movie: any) => {
    const movies = [
      ...this.movies.getValue(),
      movie
    ]
    this.movies.next(movies)
    localStorage.setItem('movies', JSON.stringify(this.movies.getValue()))
  }

  deleteMovie(id: string) {
    const movie = this.movies.getValue();
    const updatedMovies = movie.filter((movie: any) =>  movie.id !== id)
    this.movies.next(updatedMovies)
    localStorage.setItem('movies', JSON.stringify(updatedMovies))
  }
}
