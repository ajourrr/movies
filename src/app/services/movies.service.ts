import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { of } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor() {
    const localMovies: any = localStorage.getItem('movies');
    console.log(localMovies);
  }

  ngOnInit() {}

  movies: Movie[] = [
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
  ];

  getFilm(id: string) {
    return of(this.movies.find((movie) => movie.id === id));
  }

  getFilms = () => of(this.movies);

  addMovie(movie: any) {
    this.movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(this.movies));
    console.log(JSON.stringify(this.movies))
  }

  deleteMovie(id: string) {
    const objIndex = this.movies.findIndex((obj) => obj.id === id);
    this.movies.splice(objIndex, 1);
  }
}
