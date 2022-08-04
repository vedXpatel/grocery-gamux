import React, { useState } from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;




function AddProduct() {

    const [data, setData] = useState({
        "name": "",
        "price": null,
        "description": "",
        "category": "",
        "quantity": null,
        "createdBy": ""
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    

    const imageChange = (e) => {
        const [file] = e.target.files;
        setImage(URL.createObjectURL(file));
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <form action="" style={{ display: 'flex',flexWrap: 'wrap', width: "40vw" ,fontSize:"2vh"}}>
                        <input className="add-product-input" type="text" placeholder="name" onChange={handleChange} />
                        <input className="add-product-input" type="numeric" placeholder="price" onChange={handleChange} />
                        <textarea className="add-product-input" name="description" id="" cols="30" rows="1" placeholder="description" onChange={handleChange}></textarea>
                        <select className="add-product-input" style={{maxHeight:"6vh"}} name="category" id="" onChange={handleChange}>
                            <option value="">First</option>
                        </select>
                        <input className="add-product-input" type="number" name="quantity" id="" placeholder='quantity' onChange={handleChange} />
                        <input className="add-product-input" type="text" name="createdBy" onChange={handleChange} />
                        <input className="add-product-input" type="file" src="" alt="" placeholder="Add Product Image" onChange={imageChange} />
                        <img src={image} alt="" style={{width:"20vw",height:"20vh"}}/>
                    </form>
                </Wrapper>
            </Container>
        </>
    )
}

export default AddProduct