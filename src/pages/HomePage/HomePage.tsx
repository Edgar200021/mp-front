import { Helmet } from "react-helmet";

import { TestDiv } from "./styled";
import { PageWrapper } from "App.styled";

const HomePage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Главная - МЫ Marketplace</title>
      </Helmet>
      <TestDiv />
    </PageWrapper>
  );
};

export default HomePage;
