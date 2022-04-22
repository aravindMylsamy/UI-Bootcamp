import './MovieDisplay.css'

function MovieDisplay({movie,innerRef}){
  // console.log("movie.show.name");
  const movieName = movie.show.name;
    return (<>
           
         { movie.show.image && <div className="flex-item" id={movieName.replaceAll(" ","")} ref={innerRef}>
                <figure style={{border: '1px solid red'}}>
                    <img src={movie.show.image.medium} alt={movie.show.name} />
                    <figcaption style={{padding:'5px',backgroundColor:'white'}}>{movie.show.name}</figcaption>
                </figure>
            </div>
        }

    </>);
}

export default MovieDisplay;

// let movie = {
//               show:{
//                 name: "The Flash",
//                 type: "Scripted",
//                 summary:"Hai This is flash movie",
//                 image:{
//                     medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/8.jpg"
//                 }
//               },

       
// }