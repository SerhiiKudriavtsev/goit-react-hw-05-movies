import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
// import { Home } from "../../pages/Home";
// import { Movies } from "../../pages/Movies";
// import { MovieDetails } from "../../pages/MovieDetails";
// import { NotFound } from "../../pages/NotFound";
// import { SharedLayout } from "../SharedLayout/SharedLayout";
// import { Cast } from "../../pages/Cast";
// import { Reviews } from "../../pages/Reviews";
const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout')); //

export const App = () => {

  return (
    <div>    
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId/*" element={<MovieDetails />} />
            {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      
    </div>
  );
};
