import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mobile } from "../responsive";
import apple from "../assets/apple.png";
import peach from "../assets/peach.png";
import orange from "../assets/orange.png";
import potato from "../assets/potato.png";
import carrot from "../assets/carrot.png";
import tomato from "../assets/tomato.png";
import broccoli from "../assets/broccoli.png";
import cucumber from "../assets/cucumber.png";
import onion from "../assets/onion.png";

const Container = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;

  ${mobile({ fontSize: "2.5rem", letterSpacing: "2px" })}
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 60px;
  font-weight: 300;
  position: relative;
  z-index: 2;

  ${mobile({ fontSize: "1rem", marginBottom: "40px" })}
`;

const CarouselContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CategoryCard = styled.div`
  background: white;
  border-radius: 25px;
  padding: 30px 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-20px) scale(1.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);

    &::before {
      left: 100%;
    }

    & > img {
      transform: scale(1.1) rotate(5deg);
    }

    & > div {
      transform: translateY(-10px);
    }
  }

  &:hover .category-price {
    transform: scale(1.2);
    background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  }
`;

const CategoryImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 0 auto 20px;
  transition: all 0.4s ease;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
`;

const CategoryName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
  transition: all 0.3s ease;
`;

const CategoryDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 15px;
  font-weight: 500;
`;

const CategoryPrice = styled.div`
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
`;

const Explore = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    {
      image: apple,
      name: "Fresh Apples",
      description: "Organic & Crispy",
      price: 4.99,
      discount: "20% OFF",
    },
    {
      image: peach,
      name: "Sweet Peaches",
      description: "Juicy & Fresh",
      price: 6.99,
      discount: "15% OFF",
    },
    {
      image: orange,
      name: "Citrus Oranges",
      description: "Vitamin C Rich",
      price: 3.99,
      discount: "25% OFF",
    },
    {
      image: potato,
      name: "Organic Potatoes",
      description: "Farm Fresh",
      price: 2.99,
      discount: "30% OFF",
    },
    {
      image: carrot,
      name: "Fresh Carrots",
      description: "Beta Carotene Rich",
      price: 1.99,
      discount: "40% OFF",
    },
    {
      image: tomato,
      name: "Ripe Tomatoes",
      description: "Perfect for Salads",
      price: 3.49,
      discount: "18% OFF",
    },
    {
      image: broccoli,
      name: "Green Broccoli",
      description: "Super Healthy",
      price: 4.49,
      discount: "22% OFF",
    },
    {
      image: cucumber,
      name: "Crisp Cucumbers",
      description: "Hydrating & Fresh",
      price: 2.49,
      discount: "35% OFF",
    },
    {
      image: onion,
      name: "Fresh Onions",
      description: "Aromatic & Fresh",
      price: 1.49,
      discount: "45% OFF",
    },
  ];

  const responsive = {
    1400: { items: 5 },
    1100: { items: 4 },
    800: { items: 3 },
    600: { items: 2 },
    480: { items: 1 },
  };

  const categoryCards = items.map((item, index) => (
    <CategoryCard key={index}>
      <DiscountBadge>{item.discount}</DiscountBadge>
      <CategoryImage
        src={item.image}
        onDragStart={handleDragStart}
        alt={item.name}
      />
      <div>
        <CategoryName>{item.name}</CategoryName>
        <CategoryDescription>{item.description}</CategoryDescription>
        <CategoryPrice className="category-price">${item.price}</CategoryPrice>
      </div>
    </CategoryCard>
  ));

  return (
    <Container>
      <SectionTitle>Explore Categories</SectionTitle>
      <Subtitle>
        Discover our premium selection of fresh, organic groceries
      </Subtitle>
      <CarouselContainer>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          autoPlay={true}
          autoPlayInterval={3000}
          infinite={true}
          disableDotsControls={false}
          disableButtonsControls={false}
          items={categoryCards}
          animationDuration={800}
          animationType="fadeout"
        />
      </CarouselContainer>
    </Container>
  );
};

export default Explore;
