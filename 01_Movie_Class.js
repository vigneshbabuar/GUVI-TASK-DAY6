class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(arr) {
    let myArray = arr.filter((movie) => movie.rating == "PG");
    return myArray;
  }
}

let myMovie01 = new Movie("Casino Rayale", "Eon Productions", "PG13");
let myMovie02 = new Movie("The Abyss", "20th Century Fox", "PG");
let myMovie03 = new Movie("Avatar", "20th Century Fox", "PG");
console.log(Movie.getPG([myMovie01, myMovie02, myMovie03]));
