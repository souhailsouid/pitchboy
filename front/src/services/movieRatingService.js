import axios from 'axios';

const apiKey = 'ad2c28e0345278f3c8b002efddadf28f';
const baseUrl = 'https://api.themoviedb.org/3';

export default async function postMovieRating(id, rating) {
  const apiUrl = `${baseUrl}/movie/${id}/rating?api_key=${apiKey}`;
  const data = {
    value: rating,
  };
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${apiKey}`,
    },
  };
  await axios.post(apiUrl, data, options);
}
