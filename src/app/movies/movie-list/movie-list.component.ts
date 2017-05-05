import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {

  @Output() movieWasSelected = new EventEmitter<Movie>();

  movies: Movie[] = [
    new Movie('The Shawshank Redemption', 'Frank Darabont', '1994', 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UY67_CR0,0,45,67_AL_.jpg'),
    new Movie('The Godfather', 'Francis Ford Coppola', '1972', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR1,0,45,67_AL_.jpg'),
    new Movie('The Godfather: Part II', 'Francis Ford Coppola', '1974', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR1,0,45,67_AL_.jpg'),
    new Movie('The Dark Knight', 'Christopher Nolan', '2008', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg'),
    new Movie('12 Angry Men', 'Sidney Lumet', '1957', 'https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_UX45_CR0,0,45,67_AL_.jpg'),
    new Movie('Schindlers List', 'Steven Spielberg', '1993', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg'),
    new Movie('Pulp Fiction', 'Quentin Tarantino', '1994', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UY67_CR0,0,45,67_AL_.jpg'),
    new Movie('The Lord of the Rings: The Return of the King', 'Peter Jackson', '2003', 'https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX45_CR0,0,45,67_AL_.jpg'),
    new Movie('The Good, the Bad and the Ugly', 'Sergio Leone', '1966', 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX45_CR0,0,45,67_AL_.jpg'),
    new Movie('Fight Club', 'David Fincher', '1999', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onMovieSelected(movie: Movie){
    this.movieWasSelected.emit(movie);
  }

}
