export const getMovies = (args) => {
    const[, pageNumber] = args.queryKey;
    const {pageNum} = pageNumber;
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${pageNum}`)
      .then((response) => {
          if (!response.ok) {
              throw new Error(response.json().message);
          }
          return response.json();
      })
      .catch ((error) => {
          throw error;
      });
};

export const getMovie = (args) => {
  //console.log(args);
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      .then((response) => {
          if (!response.ok)
              throw new Error(response.json().message);
          
          return response.json();
      })
      .catch((error) => {
          throw error;
      });
};

export const getGenres = () => {
  return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      .then( (response) => {
          if (!response.ok)
              throw new Error(response.json().message);
          
          return response.json();
      })
      .catch((error) => {
          throw error;
      });
};

export const getProviders = () => {
    return fetch(`https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
        .then( (response) => {
            if (!response.ok)
                throw new Error(response.json().message);
            // console.log(response.json())
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};
export const getMoviesProviders=(id) =>{
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_watch_providers=${id}`)
      .then((response) => {
          if (!response.ok) {
              throw new Error(response.json().message);
          }
          return response.json();
      })
      .catch ((error) => {
          throw error;
      });
};


export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      .then((response) => {
          if (!response.ok)
              throw new Error(response.json().message);
          return response.json();
      })
      .catch((error) => {
          throw error
      });
};
//Cast
export const getMovieCast = (args) => {
    //console.log(args);
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
        .then((response) => {
            if (!response.ok)
                throw new Error(response.json().message);
            
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
  };

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};
//Similar Movies
export const getSimilarMovie = (args) => {
    //console.log(args);
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
        .then((response) => {
            if (!response.ok)
                throw new Error(response.json().message);
            
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
  };

export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then( (response) => {
      if (!response.ok)
          throw new Error(response.json().message);
      
      return response.json();
  })
  .catch((error) => {
      throw error;
  });
};

export const getTrending = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok)
            throw new Error(response.json().message);
        
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
  };


  export const getActors = () => {
    //console.log(args);
    return fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
        .then((response) => {
            if (!response.ok)
                throw new Error(response.json().message);
            
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
  };

  export const getActor = (args) => {
    //console.log(args);
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
        .then((response) => {
            if (!response.ok)
                throw new Error(response.json().message);
            
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
  };

  export const getActorImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        .then((response) => {
            if (!response.ok)
                throw new Error(response.json().message);
            return response.json();
        })
        .catch((error) => {
            throw error
        });
  };