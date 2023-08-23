import { Helmet } from "react-helmet";

import { TestDiv } from "./styled";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Главная - МЫ Marketplace</title>
      </Helmet>
      <TestDiv />
    </>
  );
};

export default HomePage;
