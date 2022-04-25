import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

import { MoviesService } from 'src/app/services/movies.service';


const randomMovieId = (Math.random() + 1).toString(16).slice(2, 6);
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  base64Image!: any;


  form = new FormGroup({
    id: new FormControl(randomMovieId),
    title: new FormControl('', Validators.required),
    poster: new FormControl(''),
    creationDate: new FormControl(''),
    release: new FormControl('', Validators.required),
    boxOffice: new FormControl('', Validators.required),
    actors: new FormArray([]),
  });
  constructor(private moviesService: MoviesService, public formService: FormService) {
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
    
    const newMovie = {
      id: this.getFormControls['id'].value,
      title: this.getFormControls['title'].value,
      poster: this.base64Image,
      release: this.getFormControls['release'].value,
      boxOffice: this.getFormControls['boxOffice'].value,
      actors: this.getFormControls['actors'].value,
      creationDate: this.getFormControls['creationDate'].value,
    };
    this.formService.isFormShown = false;
    this.moviesService.addMovie(newMovie);
    this.form.reset();
  }

  get getActors() {
    return this.form.get('actors') as FormArray;
  }
  get getFormControls () {
    return this.form.controls
  }
  addActor() {
    this.getActors.push(new FormControl(null));
  }
}
