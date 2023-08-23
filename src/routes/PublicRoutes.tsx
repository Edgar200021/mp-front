import { lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router";

import { checkPathMatch, pathsPublic } from "./helpers";

const HomePage = lazy(() => import("pages/HomePage"));
const ProductDetailsPage = lazy(() => import("pages/ProductDetailsPage"));

const PublicRoutes = () => {
  const location = useLocation();

  const isMatch = checkPathMatch(location.pathname, pathsPublic);

  return (
    <Routes>
      <Route path={pathsPublic.home} element={<HomePage />} />
      <Route path={pathsPublic.productDetails} element={<h1>hello</h1>} />
      <Route
        path="*"
        element={isMatch ? <Navigate to={pathsPublic.home} /> : null}
      />
    </Routes>
  );
};

export default PublicRoutes;
