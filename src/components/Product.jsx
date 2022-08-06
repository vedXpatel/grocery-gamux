import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";


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


  return (
      <Container>
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
          <button className="btn btn-success">Add To Cart</button>
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