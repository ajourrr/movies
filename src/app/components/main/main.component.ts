import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() toggleButtonValue!: string;

  searchText = '';
  movies$!: any;
  noImage = '../assets/empty.jpg';
  toggleSortButton = '';

  constructor(private moviesService: MoviesService, public formService: FormService, private cdr: ChangeDetectorRef) {
    this.moviesService.getFilms().subscribe( (mov: any) => {
      this.movies$ = mov;
    })
  }

  deleteMovie(id: string) {
    this.moviesService.deleteMovie(id);
  }

  ngOnInit() {}
}
