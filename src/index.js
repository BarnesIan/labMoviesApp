import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes,} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import FavouriteActorsPage from "./pages/favouriteActorsPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage.js";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";
import { AuthProvider } from "./contexts/authContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from './pages/trendingMoviesPage';
import MustWatchMoviesPage from './pages/mustWatchMoviesPage';
import ActorsPage from './pages/actorsPage';
import ActorsDetailsPage from './pages/actorDetailsPage';
import SimilarMoviesPage from "./pages/similarMoviesPage";
import Signup  from "./pages/signup"
import Login  from "./pages/login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
  
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
        <SiteHeader />
        <MoviesContextProvider>
          <ActorsContextProvider>
            <Routes>
            <Route path="/movies/trending" element={<TrendingMoviesPage/>} />
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route exact path="/movies/favourites" element={<PrivateRoute><FavouriteMoviesPage /></PrivateRoute>} />
            <Route exact path="/actors/favourites" element={<PrivateRoute><FavouriteActorsPage /></PrivateRoute>} />
            <Route exact path="/movies/mustWatch" element={<PrivateRoute><MustWatchMoviesPage /></PrivateRoute>} />
            <Route path="/actors/" element={<ActorsPage />} />
            <Route path="/actors/:id" element={<ActorsDetailsPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/similar/:id" element={<SimilarMoviesPage />} />
            <Route path="/page=:pageNumber" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/page=1" />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/users/signup" element={<Signup />} />
            <Route path="/users/login" element={<Login />} />
            </Routes>
          </ActorsContextProvider>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);