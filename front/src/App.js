
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetail from './components/MovieDetail'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetail/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;


