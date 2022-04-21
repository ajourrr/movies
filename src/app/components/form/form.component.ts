import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { MoviesService } from 'src/app/services/movies.service';

const today = new Date();
const currentDate =
  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form: FormGroup;
  isFormShown = false;
  base64Image!: any;

  constructor(private moviesService: MoviesService) {
    this.form = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      poster: new FormControl(''),
      release: new FormControl('', Validators.required),
      boxOffice: new FormControl('', Validators.required),
      actors: new FormArray([]),
      creationDate: new FormControl(currentDate),
    });
  }

  getImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.base64Image = reader.result;
    };
  }

  onSubmit() {
    const newMovie = {};
    const randomMovieId = (Math.random() + 1).toString(16).slice(2, 6);
    for (let [key, control] of Object.entries(this.form.controls)) {
      switch (key) {
        case 'creationDate':
          const dateArr = control.value.split('-');
          const date = new Date(dateArr[2], dateArr[1], dateArr[0]);
          Object.defineProperty(newMovie, key, {
            value: date,
            writable: true,
          });
          break;
        case 'poster':
          Object.defineProperty(newMovie, key, {
            value: this.base64Image,
            writable: true,
          });
          break;
        case 'id':
          Object.defineProperty(newMovie, key, {
            value: randomMovieId,
            writable: true,
          });
          break;
        case 'id':
          Object.defineProperty(newMovie, key, {
            value: randomMovieId,
            writable: true,
          });
          break;

        default:
          Object.defineProperty(newMovie, key, {
            value: control.value,
            writable: true,
          });
          break;
      }
    }
    this.isFormShown = false;
    this.moviesService.addMovie(newMovie);
    this.form.reset();
  }

  get getActors() {
    return this.form.get('actors') as FormArray;
  }
  addActor() {
    this.getActors.push(new FormControl(null));
  }
}
