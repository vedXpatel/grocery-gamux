import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import ProdcutContainer from "./ProductContainer.jsx";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  ${mobile({ fontSize: "2rem", marginBottom: "40px" })}
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const Products = () => {
  return (
    <div style={{ background: 'white', padding: '60px 0' }}>
      <Container>
        <SectionTitle>Featured Products</SectionTitle>
        <ProductsGrid>
          {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </ProductsGrid>
      </Container>
    </div>
  );
};

export default Products;
