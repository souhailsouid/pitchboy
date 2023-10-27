import axios from 'axios';

const apiKey = 'ad2c28e0345278f3c8b002efddadf28f';
const baseUrl = 'https://api.themoviedb.org/3';

export default function fetchMovieSuggestion(id) {
  const apiUrl = `${baseUrl}/movie/${id}/similar?api_key=${apiKey}`;
  return axios.get(apiUrl);
}
