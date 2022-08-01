import React,{useState} from "react";
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
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {

  const navigate = useNavigate();

  const [data,setData] = useState({
    "firstName":"",
    "lastName":"",
    "mobileNo":"",
    "email":"",
    "password":""
  })
  
  const SignUp = (e) =>  {
    e.preventDefault();
    if(!notSame){
      axios.post("http://localhost:5000/api/signup",data)
        .then((res)=>{
          console.log(res.data);
          localStorage.setItem("jwt_token",JSON.stringify(res.data.token));
          localStorage.setItem("user_details",JSON.stringify(res.data.user));
        })
        .catch((err)=>console.error(err))
    }else{
      alert(`Please enter same password!`)
    }
  }
  
  const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]:e.target.value
      })
      console.log(`change: ${data.firstName}`)
  }

  const [notSame,setNotSame] = useState(false);
  const passwordCheck = (e) => {
    if(data.password !== e.target.value){
      setNotSame(true);
    }else{
      setNotSame(false);
    }
  }
  


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form className="sign-up-form">
          <Input className="form-control" placeholder="first name" name="firstName" onChange={handleChange}/>
          <Input className="form-control" placeholder="last name" name="lastName" onChange={handleChange}/>
          <Input className="form-control" placeholder="email" type="email" name="email" onChange={handleChange}/>
          <Input className="form-control" placeholder="mobile" type="numeric" name="mobileNo" onChange={handleChange}/>
          <Input className="form-control" placeholder="password" type="password" name="password" onChange={handleChange}/>
          <Input className="form-control" placeholder="confirm password" type="password" onChange={passwordCheck}/>
          {
            notSame === true && <p style={{color:"red"}}>Please enter same password</p>
          }
        <a href="" onClick={()=>navigate("/login")}>ALREADY HAVE AN ACCOUNT?</a>
          <Agreement style={{fontSize:"1vw"}}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button style={{flex:1,display:"flex",justifyContent:"center"}} className="btn btn-success" onClick={SignUp}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
