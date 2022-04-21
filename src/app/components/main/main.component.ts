import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() toggleButtonValue!: string;
  @Input() formTemplate!: TemplateRef<any>;

  movies!: Movie[];
  noImage = '../assets/empty.jpg';

  constructor(private moviesService: MoviesService) {}

  deleteMovie(id: string) {
    this.moviesService.deleteMovie(id);
  }

  ngOnInit() {
    this.moviesService
      .getFilms()
      .subscribe((movies: Movie[]) => this.movies = movies);
  }
}
