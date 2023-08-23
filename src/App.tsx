import Header from "features/Header/Header";
import { Suspense } from "react";

import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";

import { AppStyles, Footer } from "./App.styled";

export const App = () => {
  return (
    <>
      <AppStyles />
      <Header />

      <Suspense fallback={"Loading..."}>
        <PublicRoutes />
        {/*<PrivateRoutes />*/}
      </Suspense>

      <Footer>
        <div>Маркетинг</div>
      </Footer>
    </>
  );
};
