import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import MovieCard from "./MovieCard";

const compare = (a, b) => {
    if (a.show.name.toLowerCase() < b.show.name.toLowerCase()) {
        return -1;
    }
    if (a.show.name.toLowerCase() > b.show.name.toLowerCase()) {
        return 1;
    }
    return 0;
};

function Movies({ movies, search, sortOrder, type }) {
    const [moviesData, setMoviesData] = useState([]);
    const [filteredMovieData, setFilteredMovieData] = useState([]);
    const [typeFilteredMovieData, setTypeFilteredMovieData] = useState([]);
    const [viewingArrayIndex, setViewingArrayIndex] = useState();

    // Search Filtering
    useEffect(() => {
        const filteredMovies = movies.filter((movie) =>
            movie.show.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredMovieData(filteredMovies);
    }, [movies, search]);

    // Type Filtering
    useEffect(() => {
        var movies = filteredMovieData;
        if (type !== "All") {
            movies = movies.filter((movie) => movie.show.type === type);
        }
        setTypeFilteredMovieData(movies);
    }, [filteredMovieData, type]);

    // Sorting
    useEffect(() => {
        typeFilteredMovieData.sort(compare);
        if (sortOrder === "descending") {
            typeFilteredMovieData.reverse();
        }
        setMoviesData([...typeFilteredMovieData]);
    }, [typeFilteredMovieData, sortOrder]);

    return (
        <main id="movie-container" className="movies">
            {viewingArrayIndex !== undefined && (
                <Modal
                    movie={moviesData[viewingArrayIndex]}
                    closeModal={() => setViewingArrayIndex()}
                />
            )}
            {moviesData.map((movie, index) => (
                <MovieCard
                    key={index}
                    movie={movie}
                    openModal={() => setViewingArrayIndex(index)}
                />
            ))}
        </main>
    );
}

export default Movies;
