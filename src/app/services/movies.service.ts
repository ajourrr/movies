import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor() {
    let localMovies;
    if (localStorage['movies']) {
      localMovies = JSON.parse(localStorage['movies']);
    }
    if (localMovies) {
      this.movies.next(localMovies);
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
      isFavorite: false,
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
      isFavorite: false,
    },
  ]);

  moviesObs = this.movies.asObservable();
  favsObs = this.movies.getValue().filter((movie: any) => movie.isFavorite);

  getFilms = () => {
    return this.moviesObs;
  };

  getFavourites() {
    return of(this.favsObs);
  }

  toggleFavorite(isFavorite: boolean, id: string) {
    const updatedMovies = this.movies.getValue().map((movie: any) => {
      if (movie.id === id) {
        return {
          ...movie,
          isFavorite,
        };
      }
      return movie;
    });
    this.movies.next(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  }

  addMovie = (movie: any) => {
    const movies = [...this.movies.getValue(), movie];
    this.movies.next(movies);
    localStorage.setItem('movies', JSON.stringify(this.movies.getValue()));
  };

  deleteMovie(id: string) {
    const movie = this.movies.getValue();
    const updatedMovies = movie.filter((movie: any) => movie.id !== id);
    this.movies.next(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  }
}
