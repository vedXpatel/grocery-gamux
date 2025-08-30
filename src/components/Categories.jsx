import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 40px 20px;
  justify-content: space-between;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  ${mobile({ 
    padding: "20px 10px", 
    flexDirection: "column",
    gap: "20px"
  })}
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  ${mobile({ fontSize: "2rem", marginBottom: "30px" })}
`;

const CategoriesWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  
  ${mobile({ flexDirection: "column", gap: "20px" })}
`;

const Categories = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '60px 0' }}>
      <SectionTitle>Shop by Category</SectionTitle>
      <Container>
        <CategoriesWrapper>
          {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </CategoriesWrapper>
      </Container>
    </div>
  );
};

export default Categories;
