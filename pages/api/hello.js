// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default function handler(req, res) {
    // Retreive list of movies from api
    axios.get(`http://localhost:8080/api/v1/movies`).then((response) => {
      console.log("this is response: ", response.data);
      res.status(200).send(response.data);
    }).catch((err) => {
      console.log('Erron GET', err);
      res.status(500);
    });
  }
