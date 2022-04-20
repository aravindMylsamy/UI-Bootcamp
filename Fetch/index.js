const movieUrl = "https://api.tvmaze.com/search/shows?q=girls";

  let movieItemList = document.getElementById("movie-list");
  let movieStore = [];
  const showDetails = (movie)=>{
    
    let displayImage = document.getElementById('display-image');
    displayImage.src = movie.show.image.original;

    let movieDesc = document.getElementById('movie-desc');
    movieDesc.innerHTML = "<strong>"+movie.show.name+"</strong>"+'</br> Summary:'+movie.show.summary+'</br> Language: '+movie.show.language;
  }

  const showMoviesList =(movieList)=>{
  for(let movie of movieList){
    
      let li = document.createElement('div');
      li.classList.add('flex-item');

      let figure = document.createElement('figure');
      figure.addEventListener('click',()=>{showDetails(movie);});
      
      let img = document.createElement('img');
      img.src=movie.show.image.original;
      img.style = 'height: 250px; width: 250px;';
      
      let figCaption = document.createElement('figcaption');
      figCaption.innerHTML = movie.show.name;
      figCaption.style = 'padding:5px; background-color: white';
      
      figure.style = 'border: 1px rgb(43, 43, 43) solid'
      figure.appendChild(img);
      figure.appendChild(figCaption);
      
      li.appendChild(figure);
      movieItemList.appendChild(li);     
  }
}
const loadMovies = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
       
        showDetails(data[0]);
        showMoviesList(data);
        
    }
    )
    .catch(() => console.log("problem loading movies."));
}

showDetails(movieStore[0]);
showMoviesList(movieStore);
