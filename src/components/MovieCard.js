import React from "react";

function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      <MovieCard title={title} img={posterURL} genres={genresArr} />
    </div>
  );

  function MovieCard(props) {
    return (
      <div className="movie-card">
        <img src={props.posterSrc} alt={props.title} />
        <h2>{props.title}</h2>
        <small>{props.genres.join(", ")}</small>
      </div>
    );
    }
}

function MovieCard({
  title,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}
  // function MovieCard(props) {
  //   return (
  //     <div className="movie-card">
  //       <img src={props.posterSrc} alt={props.title} />
  //       <h2>{props.title}</h2>
  //       <small>{props.genres.join(", ")}</small>
  //     </div>
  //   );
  //   }
  //   function MovieCard({ title, posterSrc, genres }) {
  //     return (
  //       <div className="movie-card">
  //         <img src={posterSrc} alt={title} />
  //         <h2>{title}</h2>
  //         <small>{genres.join(", ")}</small>
  //       </div>
  //     );
  //   }

  



export default MovieCard;
