import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { of } from 'rxjs';





@Injectable()
export class MoviesService {

    movieIndexer = 0;

    movies: Movie[] = [
        {
            id: this.movieIndexer++,
            title: "The Batman",
            poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
            release: '2022-3-4',
            boxOffice: 738423730
        },
        {
            id: this.movieIndexer++,
            title: "The Shawshank Redemption",
            poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            release: '1995-3-3',
            boxOffice: 28341469
        },
        {
            id: this.movieIndexer++,
            title: "The Matrix",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            release: '1999-6-11',
            boxOffice: 465974198
        },
        {
            id: this.movieIndexer++,
            title: "The Matrix Resurrections",
            poster: "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            release: '2021-12-22',
            boxOffice: 596998
        },
        {
            id: this.movieIndexer++,
            title: "The Batman",
            poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
            release: '2022-3-4',
            boxOffice: 738423730
        },
        {
            id: this.movieIndexer++,
            title: "The Shawshank Redemption",
            poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            release: '1995-3-3',
            boxOffice: 28341469
        },
        {
            id: this.movieIndexer++,
            title: "The Matrix",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            release: '1999-6-11',
            boxOffice: 465974198
        },
        {
            id: this.movieIndexer++,
            title: "The Matrix Resurrections",
            poster: "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            release: '2021-12-22',
            boxOffice: 596998
        },

    ]


    getFilm(id: number){
        return of(this.movies.find(movie => movie.id === id));
    }
    getFilms = () => of(this.movies);
    

}
