import React, { useState } from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./styles.css";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(39, 174, 96, 0.9) 0%, rgba(46, 204, 113, 0.9) 100%);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 20px;
  pointer-events: none;
`;

const Container = styled.div`
  flex: 1;
  margin: 0;
  min-width: 280px;
  max-width: 320px;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    
    ${Info} {
      opacity: 1;
    }
    
    & > img {
      transform: scale(1.05);
    }
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  z-index: 2;
  height: 220px;
  width: 100%;
  object-fit: cover;
  margin: 20px auto;
  border-radius: 15px;
  transition: transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const Icon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  pointer-events: auto;
  
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
`;

const ProductInfo = styled.div`
  padding: 25px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 4;
`;

const CategoryText = styled.p`
  color: #7f8c8d;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProductName = styled.h3`
  color: #2c3e50;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.3;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
  flex-wrap: wrap;
`;

const OriginalPrice = styled.span`
  color: #7f8c8d;
  font-size: 16px;
  font-weight: 500;
  text-decoration: line-through;
`;

const Price = styled.h4`
  color: #27ae60;
  font-size: 26px;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(39, 174, 96, 0.2);
`;

const DiscountPercentage = styled.div`
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 15px;
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
  position: relative;
  z-index: 5;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(39, 174, 96, 0.4);
    color: #27ae60;
    background: linear-gradient(135deg,rgb(252, 252, 252) 0%,rgb(255, 255, 255) 100%);
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: relative;
  z-index: 5;
`;

const QuantityButton = styled.button`
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);

  &:hover {
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(39, 174, 96, 0.4);
  }
`;

const QuantityDisplay = styled.h5`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  min-width: 30px;
  text-align: center;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
  z-index: 4;
`;

const DealTypeBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  color: white;
  padding: 6px 10px;
  border-radius: 15px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
  z-index: 4;
  animation: flash 2s infinite;
  
  @keyframes flash {
    0%, 50% { opacity: 1; }
    25%, 75% { opacity: 0.7; }
  }
`;

const Product = ({ item }) => {
  const navigate = useNavigate();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [addToCart, setAddToCart] = useState(false);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }

  const handleAddToCart = () => {
    setAddToCart(true);
    // alert(`${item.name} added to cart!`);
  }

  // Calculate discount percentage
  const originalPrice = item.originalPrice || (item.price * 1.3).toFixed(2);
  const discountPercentage = Math.floor(((originalPrice - item.price) / originalPrice) * 100);

  return (
    <Container>
      <DiscountBadge>{discountPercentage}% OFF</DiscountBadge>
      {item.dealType && <DealTypeBadge>{item.dealType}</DealTypeBadge>}
      <Image src={item.img} />
      <ProductInfo>
        <div>
          <CategoryText>{item.category}</CategoryText>
          <ProductName>{item.name}</ProductName>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={20}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#FDC040"
            value="4.2"
          />
          <PriceContainer>
            <OriginalPrice>${originalPrice}</OriginalPrice>
            <Price>${item.price}</Price>
            <DiscountPercentage>-{discountPercentage}%</DiscountPercentage>
          </PriceContainer>
        </div>
        {addToCart === false ? (
          <AddToCartButton onClick={handleAddToCart}>
            Add To Cart
          </AddToCartButton>
        ) : (
          <QuantityContainer>
            <QuantityButton onClick={decrement}>
              <RemoveIcon style={{ fontSize: '18px' }} />
            </QuantityButton>
            <QuantityDisplay>{count}</QuantityDisplay>
            <QuantityButton onClick={increment}>
              <AddIcon style={{ fontSize: '18px' }} />
            </QuantityButton>
          </QuantityContainer>
        )}
      </ProductInfo>
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{ color: '#27ae60' }} />
        </Icon>
        <Icon>
          <SearchOutlined style={{ color: '#27ae60' }} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined style={{ color: '#27ae60' }} />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
