import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector(store => store.moviesReducer);

  function getMovies() {
    // Retreive list of movies from api
    axios.get(`http://localhost:8080/api/v1/movies`).then((response) => {
      dispatch({
        // SET MOVIES in redux
        type: 'SET_MOVIES',
        payload: response.data
      });
    }).catch((err) => {
      console.log('Erron GET', err);
    });
  }

  useEffect(() => {
    // Get movie list on page load
    getMovies();
  }, []);

  return (
    <>
      <Head>
        <title>Vetter Dev</title>
        <meta name="description" content="Movie List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.center}>Vetter Dev Movie Gallery</h1>
          <div className={styles.movies}>
          {movies.map(movie => {
            return (
              <div key={movie.imdbId} className={styles.imgCard}>
                <h3 className={styles.centerTitle}>{movie.title}</h3>
                <picture>
                  <img src={movie.poster} alt={movie.title} className={styles.movieImg}/>
                </picture>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
