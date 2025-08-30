import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mobile } from "../responsive";

const Container = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="fire" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="2" fill="white" opacity="0.1"/><circle cx="10" cy="10" r="1" fill="white" opacity="0.1"/><circle cx="40" cy="40" r="1" fill="white" opacity="0.1"/><circle cx="15" cy="35" r="1.5" fill="white" opacity="0.1"/><circle cx="35" cy="15" r="1.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23fire)"/></svg>');
    pointer-events: none;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 900;
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;

  ${mobile({ fontSize: "3rem", letterSpacing: "3px" })}
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 20px;
  font-weight: 400;
  position: relative;
  z-index: 2;

  ${mobile({ fontSize: "1.1rem", marginBottom: "15px" })}
`;

const DealBadge = styled.div`
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  margin: 0 auto 40px;
  box-shadow: 0 8px 25px rgba(243, 156, 18, 0.4);
  position: relative;
  z-index: 2;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProductWrapper = styled.div`
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const TopProducts = () => {
  const enhancedProducts = popularProducts.map((product, index) => ({
    ...product,
    originalPrice: (product.price * 1.3).toFixed(2),
    discount: Math.floor(Math.random() * 30) + 20, // 20-50% discount
    dealType: ["FLASH SALE", "LIMITED TIME", "HOT DEAL", "MEGA OFFER"][
      index % 4
    ],
  }));

  const responsive = {
    1400: { items: 4 },
    1100: { items: 3 },
    800: { items: 2 },
    480: { items: 1 },
  };

  const productCards = enhancedProducts.map((item, index) => (
    <ProductWrapper key={item.id}>
      <Product item={item} />
    </ProductWrapper>
  ));

  return (
    <Container>
      <SectionTitle>🔥 Top Deals</SectionTitle>
      <Subtitle>
        Unbeatable prices on premium groceries - Don't miss out!
      </Subtitle>
      <DealBadge>⚡ Limited Time Offers ⚡</DealBadge>
      <CarouselContainer>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          autoPlay={true}
          autoPlayInterval={2500}
          infinite={true}
          disableDotsControls={false}
          disableButtonsControls={false}
          items={productCards}
          animationDuration={600}
          animationType="slide"
        />
      </CarouselContainer>
    </Container>
  );
};

export default TopProducts;
