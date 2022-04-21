import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";

import "./assets/Header.css";
import "./assets/Movies.css";
import "./assets/Modal.css";
import "./assets/Responsiveness.css";

function App() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
    const [sortOrder, setSortOrder] = useState("ascending");
    const [movies, setMovies] = useState([]);

    // Data Fetching
    useEffect(() => {
        async function getUsers() {
            let movies = await fetch("https://api.tvmaze.com/schedule");
            let movieData = await movies.json();
            setMovies(movieData);
        }
        getUsers();
    }, []);

    return (
        <>
            <Header
                search={search}
                setSearch={setSearch}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                type={type}
                setType={setType}
            />
            <Movies search={search} sortOrder={sortOrder} movies={movies} type={type} />
            <Footer />
        </>
    );
}

export default App;
