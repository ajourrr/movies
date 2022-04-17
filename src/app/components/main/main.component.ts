import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() toggleButtonValue!: string; 
  
  movies!: Movie[];

  constructor(private moviesService: MoviesService) {
    
  }

  ngOnInit() {
    this.moviesService.getFilms().subscribe((movies: Movie[]) => this.movies = movies)
  }

}
