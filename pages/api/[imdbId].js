import axios from 'axios';
// This handles GET requests to /api/v1/movies/[imdbId]
// returns the single movie details based on imdbId
export default function singleMovieHandler(req, res) {
    const { query } = req;
    const { imdbId } = query;
    axios.get(`http://localhost:8080/api/v1/movies${imdbId}`).then((response) => {
        console.log('This is the response for single movie: ', response);
        res.status(200).send(response.data);
    }).catch((err) => {
        console.log('Error in single movie GET: ', err);
        res.status(500);
    });
}