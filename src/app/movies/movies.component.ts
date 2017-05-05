import { Component, OnInit } from '@angular/core';

import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  selectedMovie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
