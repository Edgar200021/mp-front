import { Routes, Route, useLocation, Navigate } from "react-router";
import { lazy } from "react";

import { checkPathMatch, pathsPrivate, pathsPublic } from "./helpers";

const AccountSettingsPage = lazy(() => import("pages/AccountSettingsPage"));

const PrivateRoutes = () => {
  const location = useLocation();

  const isMatch = checkPathMatch(location.pathname, pathsPrivate);

  return (
    <Routes>
      <Route
        path={pathsPrivate.accountSettings}
        element={<AccountSettingsPage />}
      />
      <Route
        path="*"
        element={isMatch ? <Navigate to={pathsPublic.home} /> : null}
      />
    </Routes>
  );
};

export default PrivateRoutes;
