import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'


const Movie = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const movie = useSelector(store => store.)

    function getSingleMovie() {
        axios.get(`http://localhost:8080/api/v1/${id}`).then((response) => {
            dispatch({
                type: 'SET_SINGLE_MOVIE',
                payload: response.data
            });
        }).catch((err) => {
            console.log('Error GETTING single movie: ', err);
        });
    }

    useEffect(() => {
        getSingleMovie();
    }, []);

    return (
        <>
            <Head>
                <title>Single Movie - Vetter Dev</title>
                <meta name="description" content="Movie details"/>
                <meta name="viewport" content="width=device-width, intial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Movie Details</h1>

        </>
    )
}

export default Movie;