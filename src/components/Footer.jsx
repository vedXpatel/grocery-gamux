import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  LocalShipping,
  Security,
  Favorite,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 40px 0;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #27ae60;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  line-height: 1.6;
  color: #ecf0f1;
  font-size: 14px;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px 40px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #27ae60;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  color: #ecf0f1;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 14px;

  &:hover {
    color: #27ae60;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px 40px;
  ${mobile({ backgroundColor: "rgba(255,255,255,0.05)" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #ecf0f1;
  font-size: 14px;
  line-height: 1.5;
`;

const Payment = styled.img`
  width: 60%;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: rgba(255,255,255,0.05);
  padding: 30px 20px;
  margin-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ecf0f1;
  
  ${mobile({ marginBottom: "20px" })}
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: white;
`;

const FeatureTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #27ae60;
`;

const FeatureDesc = styled.p`
  font-size: 12px;
  color: #bdc3c7;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>Fresh Grocery</Logo>
          <Desc>
            Your trusted source for fresh, organic groceries delivered right to your doorstep. 
            We source the finest quality products from local farmers and trusted suppliers to 
            ensure you get the best ingredients for your healthy lifestyle.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Quick Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Shopping Cart</ListItem>
            <ListItem>Fresh Vegetables</ListItem>
            <ListItem>Organic Fruits</ListItem>
            <ListItem>Dairy Products</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Customer Support</ListItem>
            <ListItem>Terms & Conditions</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact Info</Title>
          <ContactItem>
            <Room style={{marginRight:"15px", color: "#27ae60"}}/> 
            123 Fresh Market St, Grocery City, GC 12345
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"15px", color: "#27ae60"}}/> 
            +1 (555) 123-4567
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"15px", color: "#27ae60"}} /> 
            hello@freshgrocery.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
      <FeaturesContainer>
        <Feature>
          <FeatureIcon>
            <LocalShipping />
          </FeatureIcon>
          <FeatureTitle>Free Delivery</FeatureTitle>
          <FeatureDesc>On orders over $50</FeatureDesc>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Security />
          </FeatureIcon>
          <FeatureTitle>Secure Payment</FeatureTitle>
          <FeatureDesc>100% secure checkout</FeatureDesc>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Security />
          </FeatureIcon>
          <FeatureTitle>24/7 Support</FeatureTitle>
          <FeatureDesc>Dedicated support</FeatureDesc>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Favorite />
          </FeatureIcon>
          <FeatureTitle>Fresh Quality</FeatureTitle>
          <FeatureDesc>100% organic products</FeatureDesc>
        </Feature>
      </FeaturesContainer>
    </>
  );
};

export default Footer;
