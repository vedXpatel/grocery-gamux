import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import "./styles.css";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  ${mobile({ height: "50vh" })}
`;

const Arrow = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  ${mobile({ height: "50vh" })}
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.8);
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  color: white;
  z-index: 1;
  position: relative;
  ${mobile({ padding: "30px 20px" })}
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInLeft 1s ease-out;

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  ${mobile({ fontSize: "2.5rem" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: slideInLeft 1s ease-out 0.3s both;

  ${mobile({ fontSize: "1.2rem", letterSpacing: "1px" })}
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: slideInLeft 1s ease-out 0.6s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
  }

  ${mobile({
    padding: "12px 25px",
    fontSize: "1rem",
    marginTop: "10px",
  })}
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }, 5000);

    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: "24px", color: "#2c3e50" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
              <SlideOverlay />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button className="main-buy-now btn btn-success">Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ fontSize: "24px", color: "#2c3e50" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
