import { Helmet } from "react-helmet";

import { ProductGroup, ProductGroupContainer } from "./styled";
import { PageWrapper } from "App.styled";
import ProductCard from "blocks/ProductCard/ProductCard";
import { dummyProducts } from "pages/dummyProducts";

const HomePage = () => {
  return (
    <>
     <Helmet>
        <title>Главная - МЫ Marketplace</title>
      </Helmet>

      <PageWrapper>

      <PageWrapper>
      <ProductGroup>
        <h2>Рекомендуемые товары</h2>

        <ProductGroupContainer>
          {dummyProducts.map((p) => (
            <ProductCard
              {...p}
              key={p.id}
              //isLiked={idsInFavorites.includes(p.id)}
            />
          ))}
        </ProductGroupContainer>
      </ProductGroup>
    </PageWrapper>
    </PageWrapper>
      </>

  );
};

export default HomePage;
