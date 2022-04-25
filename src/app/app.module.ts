import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesService } from './services/movies.service';
import { NumRoundPipe } from './pipes/numRound.pipe';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { SearchByTitlePipe } from './pipes/searchByTitle.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FormComponent,
    NumRoundPipe,
    SearchByTitlePipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [MoviesService, FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
