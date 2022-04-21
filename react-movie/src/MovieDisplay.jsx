import './MovieDisplay.css'

function MovieDisplay({movie}){
  // console.log("movie.show.name");
    return (<>
 
         { movie.show.image && <div className="flex-item">
                <figure style={{border: '1px solid red'}}>
                    <img src={movie.show.image.medium} alt={movie.show.name} />
                    <figcaption style={{padding:'5px',backgroundColor:'white'}}>{movie.show.name}</figcaption>
                </figure>
            </div>
        }

    </>);
}

export default MovieDisplay;