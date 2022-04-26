import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { FormService } from 'src/app/services/form.service';
import { MoviesService } from 'src/app/services/movies.service';
import { ViewDisplayService } from 'src/app/services/viewDisplay.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() toggleButtonValue!: string;

  searchText = '';
  movies$!: Observable<any>;
  noImage = '../assets/empty.jpg';
  toggleSortButton = '';
  param = new BehaviorSubject('');
  favsParam = '';

  constructor(
    public viewDisplayS: ViewDisplayService,
    private activeRoute: ActivatedRoute,
    private moviesService: MoviesService,
    public formService: FormService,
  ) {
    

    this.activeRoute.params.subscribe((params) => {
      this.param.next(params['page']);
    });

    this.movies$ = combineLatest([this.moviesService.movies, this.param]).pipe(
      map(([movies, param]: any) => {
        if (param === 'main') {
          return movies;
        }
        const favorites = movies.filter((movie: any) => movie.isFavorite);
        return favorites;
      })
    );
  }

  deleteMovie(id: string) {
    this.moviesService.deleteMovie(id);
  }

  toggleFavorite(event: Event, id: string) {
    const value = (event.target as HTMLInputElement).checked;
    this.moviesService.toggleFavorite(value, id);
  }
  toggleSort(){
    localStorage.setItem('toggleSort', JSON.stringify(this.toggleSortButton))
  }

  ngOnInit() {
    const localSort = localStorage['toggleSort'];
    console.log(localSort)
    if(localSort){
      this.toggleSortButton = JSON.parse(localSort);
    }
  }
}
