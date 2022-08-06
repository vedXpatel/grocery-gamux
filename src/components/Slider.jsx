import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import "./styles.css"

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ backgroundSize: "cover" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  overflow:hidden;
`;

const Image = styled.img`
  height: 75vh;
  overflow:hidden;
  width:100;
  background-size:stretch;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 5vh;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 2.5vh;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
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

  // setInterval(()=>{
  //   setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
  // },3000)

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
          isMobile === false &&
          <>
            {sliderItems.map((item) => (
              <Slide bg={item.bg} key={item.id} >
                <ImgContainer >
                  <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button className="main-buy-now btn btn-success" style={{borderRadius:0}}>BUY NOW</Button>
                </InfoContainer>
              </Slide>
            ))}
          </>
        }
        {
          isMobile && <>
            {sliderItems.map((item) => (
              <Slide bg={item.bg} key={item.id} style={{marginTop:"10vh"}}>
                <ImgContainer style={{width:"100vw"}}>
                  <Image src={item.img} />
                  <Title style={{top:"-60vh",fontSize:"4vh",position:"relative",color:"white",backgroundColor:"#1A4D2E",paddingLeft:"4vw",margin:"10vw",marginBottom:"0",fontWeight:"bold"}}>{item.title}</Title>
                  <Desc style={{top:"-60vh",fontSize:"2.5vh",position:"relative",color:"white",backgroundColor:"#1A4D2E",paddingLeft:"4vw",margin:"10vw",marginTop:"0",fontWeight:"bold"}}>{item.desc}</Desc>
                  <Button className="btn btn-success" style={{top:"-60vh",marginLeft:"10vw",fontSize:"2vh",position:"relative",backgroundColor:"white",border:"none",borderRadius:"100px",paddingTop:"2px",paddingBottom:"2px",color:'#1A4D2E'}}>BUY NOW</Button>
                </ImgContainer>
              </Slide>
            ))}
          </>
        }

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
