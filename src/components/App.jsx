import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header.jsx';

const Home = React.lazy(() => import('./Home/Home'));
const Movies = React.lazy(() => import('./Movies/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path="/movies" element={<Suspense fallback={<div>Loading...</div>}><Movies /></Suspense>} />
        <Route path="/movies/:movieId" element={<Suspense fallback={<div>Loading...</div>}><MovieDetails /></Suspense>}>
          <Route path="cast" element={<Suspense fallback={<div>Loading...</div>}><Cast /></Suspense>} />
          <Route path="reviews" element={<Suspense fallback={<div>Loading...</div>}><Reviews /></Suspense>} />
        </Route>
      </Routes>
    </div>
  );
}

export { App };