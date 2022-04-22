import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() toggleButtonValue!: string;
  
  @ViewChild('template') template!: TemplateRef<any>

  searchText = '';
  movies!: Movie[];
  noImage = '../assets/empty.jpg';
  toggleSortButton = '';

  constructor(private moviesService: MoviesService) {}

  deleteMovie(id: string) {
    this.moviesService.deleteMovie(id);
  }

  ngOnInit() {
    console.log(this.toggleSortButton)
    this.moviesService
      .getFilms()
      .subscribe((movies: Movie[]) => this.movies = movies);

  }
}
