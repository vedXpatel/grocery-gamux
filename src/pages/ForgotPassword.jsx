import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function ForgotPassword() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: "",
    mobileNo: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (!data.email && !data.mobileNo) {
      alert("Please enter either email or mobile number");
      return;
    }

    setIsLoading(true);

    // Fake password reset - simulate API delay
    setTimeout(() => {
      alert(
        "Password reset link has been sent to your email/mobile! (This is a demo)"
      );
      setIsLoading(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <Container>
      <Wrapper>
        <Title>RESET PASSWORD</Title>
        <Form className="sign-up-form">
          <Input
            autocomplete="off"
            className="form-control"
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <Input
            autocomplete="off"
            className="form-control"
            placeholder="mobile (optional)"
            type="tel"
            name="mobileNo"
            onChange={handleChange}
          />
          <Button
            style={{ flex: 1, display: "flex", justifyContent: "center" }}
            className="btn btn-success"
            onClick={resetPassword}
            disabled={isLoading}
          >
            {isLoading ? "SENDING..." : "RESET PASSWORD"}
          </Button>
          <Link onClick={() => navigate("/login")}>BACK TO LOGIN</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default ForgotPassword;
