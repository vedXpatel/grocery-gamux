import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (signInType === 0) {
      axios.post("http://localhost:5000/api/emailSignin", data)
        .then((res) => {
          alert(`Successfully Logged In!`);
          console.log(res.data);
          localStorage.setItem("jwt_token", JSON.stringify(res.data.token));
          localStorage.setItem("user_details", JSON.stringify(res.data.user));
          console.log(JSON.parse(localStorage.getItem("jwt_token")));
          navigate("/");
        })
        .catch((err) => console.error(err))
    } else {
      axios.post("http://localhost:5000/api/mobileSignin", data)
        .then((res) => {
          alert(`Successfully Logged In!`);
          console.log(res.data);
          localStorage.setItem("jwt_token", JSON.stringify(res.data.token));
          localStorage.setItem("user_details", JSON.stringify(res.data.user));
          console.log(JSON.parse(localStorage.getItem("jwt_token")));
          navigate("/");
        })
        .catch((err) => console.error(err))
    }
  }

  const [signInType, setSignInType] = useState(0);

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
            signInType === 1 && <Input placeholder="mobile" name="mobileNo" type="numeric" onChange={handleChange} />
          }
          <Input placeholder="password" name="password" type="password" onChange={handleChange} />
          <Button onClick={handleLogin}>LOGIN</Button>
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
