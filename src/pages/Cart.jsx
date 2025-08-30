import { Add, Remove, DeleteOutline } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { cartItems } from "../data";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
`;

const Wrapper = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  ${mobile({ padding: "20px 10px" })}
`;

const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  ${mobile({ flexDirection: "column", gap: "20px" })}
`;

const TopButton = styled.button`
  padding: 15px 25px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) =>
    props.type === "filled" ? "none" : "2px solid #2c3e50"};
  background-color: ${(props) =>
    props.type === "filled" ? "#2c3e50" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "#2c3e50")};
  border-radius: 25px;
  transition: all 0.3s ease;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background-color: ${(props) =>
      props.type === "filled" ? "#34495e" : "#2c3e50"};
    color: white;
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 15px;
  color: #7f8c8d;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #2c3e50;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ecf0f1;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    margin: 0 -20px;
  }

  ${mobile({ flexDirection: "column", gap: "20px" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
`;

const ProductId = styled.span`
  color: #7f8c8d;
  font-size: 14px;
`;

const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 2px solid #ecf0f1;
`;

const ProductSize = styled.span`
  color: #7f8c8d;
  font-size: 14px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: #f8f9fa;
  padding: 10px 20px;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProductAmount = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  min-width: 30px;
  text-align: center;
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #27ae60;
`;

const RemoveButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: #c0392b;
    transform: translateY(-2px);
  }
`;

const Hr = styled.hr`
  background-color: #ecf0f1;
  border: none;
  height: 1px;
  margin: 20px 0;
`;

const Summary = styled.div`
  flex: 1;
  border: 2px solid #ecf0f1;
  border-radius: 15px;
  padding: 30px;
  height: fit-content;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.5rem;
`;

const SummaryItem = styled.div`
  margin: 25px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "700"};
  font-size: ${(props) => props.type === "total" && "20px"};
  color: ${(props) => (props.type === "total" ? "#2c3e50" : "#7f8c8d")};
  padding: ${(props) => (props.type === "total" ? "15px 0" : "10px 0")};
  border-bottom: ${(props) =>
    props.type === "total" ? "2px solid #ecf0f1" : "none"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span`
  font-weight: 600;
  color: ${(props) => (props.type === "total" ? "#27ae60" : "#2c3e50")};
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(39, 174, 96, 0.3);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const EmptyCartTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 2rem;
`;

const EmptyCartText = styled.p`
  color: #7f8c8d;
  margin-bottom: 30px;
  font-size: 1.1rem;
`;

const Cart = () => {
  const [items, setItems] = useState(cartItems);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    calculateTotal();
  }, [items]);

  const calculateTotal = () => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = subtotal > 50 ? 0 : 5.9;
    const shippingDiscount = subtotal > 50 ? -5.9 : 0;
    setTotal(subtotal + shipping + shippingDiscount);
  };

  const handleQuantityChange = (id, change) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert(
      "Thank you for your order! This is a demo - no actual payment will be processed."
    );
    setItems([]);
    navigate("/");
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.9;
  const shippingDiscount = subtotal > 50 ? -5.9 : 0;

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>🛒 Your Shopping Cart</Title>
        <Top>
          <TopButton onClick={() => navigate("/")}>
            ← Continue Shopping
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({items.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton
            type="filled"
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
            Checkout Now
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {items.length === 0 ? (
              <EmptyCart>
                <EmptyCartTitle>Your cart is empty</EmptyCartTitle>
                <EmptyCartText>
                  Add some fresh groceries to get started!
                </EmptyCartText>
                <TopButton onClick={() => navigate("/")}>
                  Start Shopping
                </TopButton>
              </EmptyCart>
            ) : (
              items.map((item) => (
                <div key={item.id}>
                  <Product>
                    <ProductDetail>
                      <Image src={item.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {item.name}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {item.id}
                        </ProductId>
                        <ProductColor color="green" />
                        <ProductSize>
                          <b>Category:</b> {item.category}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add
                          onClick={() => handleQuantityChange(item.id, 1)}
                          style={{ cursor: "pointer", color: "#27ae60" }}
                        />
                        <ProductAmount>{item.quantity}</ProductAmount>
                        <Remove
                          onClick={() => handleQuantityChange(item.id, -1)}
                          style={{ cursor: "pointer", color: "#e74c3c" }}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>
                        ${(item.price * item.quantity).toFixed(2)}
                      </ProductPrice>
                      <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                        <DeleteOutline style={{ fontSize: "16px" }} />
                        Remove
                      </RemoveButton>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </div>
              ))
            )}
          </Info>
          <Summary>
            <SummaryTitle>📋 Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${subtotal.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>${shipping.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>
                ${shippingDiscount.toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice type="total">
                ${total.toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleCheckout} disabled={items.length === 0}>
              {items.length === 0 ? "Cart Empty" : "Proceed to Checkout"}
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
