import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import "./styles.css"
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { isMobile, isTablet } from "react-device-detect"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px", width: "100vw" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  height:2.5vh;
  font-size:2vh;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;





const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(undefined);
  const [navMenu, setNavMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("jwt_token")) != undefined) {
      setIsLoggedIn(true);
    }
  }, [])


  return (
    <Container >
      {
        isMobile === false  &&
        <Wrapper>
          <Left>
            <input type="text" className="main-search-input form-control" placeholder="Search" />
            <Search style={{ color: "gray", height: '3vh', width: '3vh', position: "relative", left: "-2.5vw" }} />
          </Left>
          <Center>
            <Logo>GROCERY</Logo>
          </Center>
          <Right>
            {
              isLoggedIn &&
              <>
                <a href="" className="navbar-link">{JSON.parse(localStorage.getItem("user_details")).firstName}</a>
              </>
            }
            {
              isLoggedIn === false && <>
                <a href="" onClick={() => navigate("/signup")} className="navbar-link">REGISTER</a>
                <a href="" onClick={() => navigate("/login")} className="navbar-link">SIGN IN</a>
              </>
            }
            <MenuItem>
              <a href="" onClick={() => navigate("/cart")} className="go-to-cart" style={{ textDecoration: "none", color: "black" }}>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined style={{ height: '1.5vw', width: "1.5vw" }} />
                </Badge>
              </a>
            </MenuItem>
          </Right>
        </Wrapper>
      }
      {
        isMobile === true && navMenu === false && isTablet === false &&
        <Wrapper>
          <Center style={{ top: "5vh" }}>
            <Logo>GROCERY</Logo>
          </Center>
          <Right style={{ position: "absolute", right: "2vw" }}>
            <a href="" onClick={() => navigate("/cart")} className="go-to-cart" style={{ textDecoration: "none", color: "black" }}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined style={{ height: '6vw', width: "6vw" }} />
              </Badge>
            </a>
            <button className="btn" style={{ paddingTop: '0', outline: "none", border: "none" }}>
              <GiHamburgerMenu style={{ width: "7vw", height: "7vw" }} />
            </button>
          </Right>
        </Wrapper>
      }
    </Container>
  );
};

export default Navbar;
