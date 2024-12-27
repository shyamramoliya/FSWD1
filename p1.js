const movies = [
    { title: "Pushpa-2", genre: "Action", rating: 8.8, releaseYear: 2024 },
    { title: "3- Idiots", genre: "Comedy", rating: 9.0, releaseYear: 2008 },
    { title: "Jigra", genre: "Action", rating: 8.6, releaseYear: 2024 }
];
console.log(movies);

const addMovie = (collection, movie) => {
    collection.push(movie);
};

addMovie(movies, { title: "Red One", genre: "Action", rating: 7.5, releaseYear: 2023 });
console.log(movies);

const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};
console.log(listMoviesByGenre(movies, "Sci-Fi"));

const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
console.log(findHighestRatedMovie(movies));

const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};
console.log(getMovieTitles(movies));

const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};
console.log(moviesAfterYear(movies, 2010));

movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});

const r = movies.find(movie => movie.rating === 9);
console.log(r);
