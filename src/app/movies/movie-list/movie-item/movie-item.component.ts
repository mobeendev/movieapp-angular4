import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html'
})
export class MovieItemComponent implements OnInit {

  @Output() movieSelected = new EventEmitter<void>();

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.movieSelected.emit();
  }

}
