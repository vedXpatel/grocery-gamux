import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  height: 300px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    
    & > img {
      transform: scale(1.1);
    }
    
    & > div {
      background: linear-gradient(135deg, rgba(39, 174, 96, 0.9) 0%, rgba(46, 204, 113, 0.9) 100%);
    }
  }

  ${mobile({ height: "200px" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.8) 0%, rgba(52, 73, 94, 0.8) 100%);
  transition: all 0.3s ease;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  text-transform: uppercase;
  letter-spacing: 2px;
  
  ${mobile({ fontSize: "1.5rem", marginBottom: "15px" })}
`;

const Button = styled.button`
  border: none;
  padding: 12px 25px;
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  }

  ${mobile({ padding: "10px 20px", fontSize: "14px" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
