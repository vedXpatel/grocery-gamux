import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
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

    const [data,setData] = React.useState({
        "mobileNo":null,
        "password":""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const changePassword = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/recoverPassword",data)
            .then((res)=>{
                console.log(res.data);
                alert(`Successfully Updated Password`);
            })
            .catch((err)=>{
                console.error(err);
            })
    }

  return (
    <Container>
      <Wrapper>
        <Title>CHANGE PASSWORD</Title>
        <Form className="sign-up-form">
          <Input autocomplete="off" className="form-control" placeholder="mobile" type="numeric" name="mobileNo" onChange={handleChange}/>
          <Input className="form-control" placeholder="password" type="password" name="password" onChange={handleChange}/>
          <Button style={{flex:1,display:"flex",justifyContent:"center"}} className="btn btn-success" onClick={changePassword}>SUBMIT</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default ForgotPassword