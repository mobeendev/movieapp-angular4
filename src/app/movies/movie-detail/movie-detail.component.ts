import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
