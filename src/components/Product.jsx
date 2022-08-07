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
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  
`;

const Container = styled.div`
  flex: 1;
  margin: 25px;
  min-width: 280px;
  max-width:280px;
  height: 387px;
  display: flex;
  justify-content: center;
  flex-direction:column;
  background-color: #f5fbfd;
  position: relative;
  border-radius:20px;
  &:hover ${Info}{
    opacity: 1;
  }
  box-shadow:
  1.9px 1.3px 1.8px rgba(0, 0, 0, 0.02),
  4.7px 3.1px 4.3px rgba(0, 0, 0, 0.028),
  8.8px 5.8px 8px rgba(0, 0, 0, 0.035),
  15.6px 10.3px 14.3px rgba(0, 0, 0, 0.042),
  29.2px 19.2px 26.7px rgba(0, 0, 0, 0.05),
  70px 46px 64px rgba(0, 0, 0, 0.07)
;


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
  height: 154px;
  margin: 20px auto;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
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
    setCount(count+1);
  }

  const decrement = () => {
    if(count<=1){
      count=1;
    }else{
      setCount(count-1);
    }
  }

  return (
    <Container>
      <div className="discount-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
          <path fill="#E11500" fill-rule="evenodd" d="M36.168 19.492c-.16-.313-.16-.671 0-.984l1.477-2.9c.822-1.614.17-3.538-1.483-4.38L33.19 9.715c-.321-.163-.54-.453-.603-.796l-.581-3.179c-.324-1.77-2.03-2.959-3.884-2.707l-3.33.452c-.36.049-.715-.062-.976-.304L21.4.937c-1.346-1.25-3.454-1.25-4.8 0l-2.417 2.244c-.261.242-.617.353-.976.304l-3.33-.452c-1.854-.252-3.56.938-3.884 2.708l-.58 3.178c-.063.343-.283.633-.603.797l-2.971 1.512c-1.655.842-2.306 2.766-1.484 4.38l1.477 2.9c.16.313.16.672 0 .984l-1.477 2.9c-.822 1.614-.17 3.538 1.483 4.38l2.971 1.513c.321.163.54.453.603.796l.581 3.179C6.288 33.87 7.728 35 9.383 35c.162 0 .328-.01.494-.033l3.33-.452c.36-.049.715.062.976.304l2.417 2.244c.673.625 1.536.937 2.4.937.863 0 1.727-.312 2.4-.937l2.417-2.244c.261-.242.617-.352.976-.304l3.33.452c1.855.252 3.56-.938 3.884-2.707l.58-3.179c.063-.343.283-.633.604-.796l2.97-1.513c1.655-.842 2.306-2.766 1.484-4.38l-1.477-2.9z" />
        </svg>
        <p className="discount-text">50%</p>
        <p className="discount-text-off">OFF</p>
      </div>
      <Image src={item.img} />
      <div className="card-information-container">
        <p className="category-text">Coffee & Teas</p>
        <h3 className="product-name">Green Tea 250g</h3>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#FDC040"
          value="3.5"
        />
        <h4 className="price-section-card">$10</h4>
        {
          addToCart === false &&
          <button className="btn btn-success" onClick={() => setAddToCart(true)}>Add To Cart</button>
        }
        {
          addToCart === true &&
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-auto">
                  <button className="btn btn-success" onClick={increment}><AddIcon/></button>
                </div>
                <div className="col-md-auto">
                  <h5 style={{margin:"auto"}}>{count}</h5>
                </div>
                <div className="col-md-auto">
                  <button className="btn btn-success" onClick={decrement}><RemoveIcon/></button>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </Container>
  );
};

export default Product;

      // <Info>
      //   <Icon>
      //     {/* <a href="" onClick={()=>navigate("/cart")} style={{color:"black"}}> */}
      //     {/* </a> */}
      //     <ShoppingCartOutlined />
      //   </Icon>
      //   <Icon>
      //     {/* <a href="" onClick={()=>navigate("/product")} style={{color:"black"}}> */}
      //     {/* </a> */}
      //     <SearchOutlined />
      //   </Icon>
      //   <Icon>
      //     <FavoriteBorderOutlined />
      //   </Icon>
      // </Info>