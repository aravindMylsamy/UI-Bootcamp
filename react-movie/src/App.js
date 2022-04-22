
import './App.css';
import {useState,useEffect,useRef} from 'react';
import MovieDisplay from './MovieDisplay';

function App() {
  
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('All');
  const [movies, setMovies] = useState([]);
  const [filterMovies,setFilterMovies]= useState([]);
  const moviesRef = useRef([]);
  const testRef = useRef(null);
  
  //console.log("movie");

  useEffect(() =>{
    async function getUsers() {
      let movies = await fetch('https://api.tvmaze.com/schedule');

      let MovieData = await movies.json();
      setMovies(MovieData);
      setFilterMovies(MovieData);
      moviesRef.current = MovieData;
    }
    getUsers(); 
  
    return () => {
      
    };
  },[])

  useEffect(() =>{
    // let name= document.getElementById('AskThisOldHouse');
    if(testRef.current!=null)
    testRef.current.scrollIntoView({behavior: 'smooth'});
    console.log(testRef.current);
  },[filterMovies])

  const sortAscending = () =>{
   console.log("sortAscending");
    let sortedMovies = filterMovies.sort((movieOne,movieTwo) => movieOne.show.name > movieTwo.show.name? 1 : -1);
    console.log(sortedMovies);
    setFilterMovies([...sortedMovies]);
    let name= document.getElementById('AskThisOldHouse');
    name.scrollIntoView({behavior: 'smooth'});
    console.log(name);
  }

  const sortDescending = () =>{
 //   console.log("sortDescending");
    let sortedMovies = filterMovies.sort((movieOne,movieTwo) => movieOne.show.name > movieTwo.show.name? -1 : 1);
    console.log(sortedMovies);
    setFilterMovies([...sortedMovies]);
  }

  const filterData = (e) =>{
    let movieString = e.target.value;

    if(movieString.length < 0)
    movieString = "boys";

    let filteredMovies = movies.filter((movie) => movie.show.name.toLowerCase().includes(movieString.toLowerCase()));
    setSearch(movieString);

    if(filteredMovies.length > 0){
    moviesRef.current = [...filteredMovies];
    setFilterMovies([...filteredMovies])
    }

    console.log(filteredMovies);
  }
  const handleChange = (e) =>{

    let dropdownValue = e.target.value
    let moviesType = moviesRef.current;
    console.log(moviesType);

    if(dropdownValue === 'All'){
      setFilterMovies([...moviesType]);
    }
    else{
      let filteredMovies = moviesType.filter((movie) => movie.show.type===dropdownValue);
      console.log(filteredMovies);
      setFilterMovies([...filteredMovies]);
    }
    setValue(dropdownValue);
  }

  return (
    <div className="App">
      <input type="text" value={search} onChange={filterData} />
      <button className="sort-ascending" style={{margin:'10px'}}onClick={sortAscending}>Ascending</button>
      <button className="sort-descending" style={{margin:'10px'}}onClick={sortDescending}>Descending</button>
      <label>
        <b>Type </b>  
        <select value={value} onChange={handleChange}>
          <option value="All">All</option>
          <option value="Reality">Reality</option>
          <option value="Scripted">Scripted</option>
        </select>
      </label>
      <section>
         <div className="flex-container" id="movie-list">  
            
            {filterMovies.map((movie,index) => (
              movie.show.name.replaceAll(" ","") === 'NakedNews' ?
              <MovieDisplay movie={movie} key={index} innerRef={testRef} />:
              <MovieDisplay movie={movie} key={index}/>

            ))}
            
         </div>
      </section>
    </div>
  );
}

export default App;
