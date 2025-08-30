import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    "email": "",
    "password": "",
    "mobile": null
  })

  const [signInType, setSignInType] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Fake authentication - simulate API delay
    setTimeout(() => {
      // Demo credentials for testing
      const demoCredentials = {
        email: "demo@example.com",
        password: "password123",
        mobile: "1234567890"
      };

      if (signInType === 0) {
        // Email login
        if (data.email === demoCredentials.email && data.password === demoCredentials.password) {
          const fakeUser = {
            firstName: "Demo",
            lastName: "User",
            email: data.email,
            id: "demo123"
          };
          const fakeToken = "fake-jwt-token-" + Date.now();
          
          localStorage.setItem("jwt_token", JSON.stringify(fakeToken));
          localStorage.setItem("user_details", JSON.stringify(fakeUser));
          
          alert("Successfully Logged In! Welcome back, Demo User!");
          navigate("/");
        } else {
          alert("Invalid credentials. Use demo@example.com / password123");
        }
      } else {
        // Mobile login
        if (data.mobile === demoCredentials.mobile && data.password === demoCredentials.password) {
          const fakeUser = {
            firstName: "Demo",
            lastName: "User",
            mobile: data.mobile,
            id: "demo123"
          };
          const fakeToken = "fake-jwt-token-" + Date.now();
          
          localStorage.setItem("jwt_token", JSON.stringify(fakeToken));
          localStorage.setItem("user_details", JSON.stringify(fakeUser));
          
          alert("Successfully Logged In! Welcome back, Demo User!");
          navigate("/");
        } else {
          alert("Invalid credentials. Use 1234567890 / password123");
        }
      }
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("jwt_token")) != undefined) {
      alert(`Already Logged In`)
      navigate("/")
    }
  }, [])

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          {
            signInType === 0 && <Input placeholder="email" name="email" type="email" onChange={handleChange} />
          }
          {
            signInType === 1 && <Input placeholder="mobile" name="mobile" type="tel" onChange={handleChange} />
          }
          <Input placeholder="password" name="password" type="password" onChange={handleChange} />
          <Button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "LOGGING IN..." : "LOGIN"}
          </Button>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
            <strong>Demo Credentials:</strong><br/>
            Email: demo@example.com<br/>
            Mobile: 1234567890<br/>
            Password: password123
          </div>
          <Link onClick={() => navigate('/forgotPassword')}>FORGOT PASSWORD</Link>
          {
            signInType === 0 && <Link onClick={() => setSignInType(1)}>USE MOBILE NUMBER INSTEAD</Link>
          }
          {
            signInType === 1 && <Link onClick={() => setSignInType(0)}>USE EMAIL INSTEAD</Link>
          }
          <Link onClick={() => navigate("/signup")}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
