import "./App.css";
import React from 'react';
import Movies from "./Movies";
import Router from "./Router";
import Modal from 'react-modal';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from "react-router-dom";
import { useEffect, useState } from "react"



function App() {
  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router />,
    },
    {
      path: "/",
      element: <Router />,
    },

  ]);

  async function getMovies() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US&page=1"
    );
    const response2 = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b7b4a27352ca70e0263c918f22073bef&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=28"
    )
    const data = await response.json();
    const data2 = await response2.json()

    console.log(data2)

    setMovies(data.results);
    setMovies2(data2.results)
    console.log(data);
  }

  useEffect(() => {
    getMovies();
  }, [movies]);

  return <div className="App">
    <RouterProvider router={router}>

    </RouterProvider>
    {movies.map((movie) => {
      return (
        <Movies movie={movie} />
      )
    })}
    {movies2.map((movie) => {
      return (
        <Movies movie={movie} />
      )
    })}
  </div>;
}

export default App;