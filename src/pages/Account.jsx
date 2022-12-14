import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import ListGroup from 'react-bootstrap/ListGroup';
import MediaQuery from "react-responsive";
import "./styles.css";
import { useNavigate } from 'react-router-dom';

function Account() {

    const navigate = useNavigate();

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("user_details")) === null){
            navigate("/");
        }
    },[]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user_details")));

    const logout = () => {
        localStorage.removeItem("user_details");
        localStorage.removeItem("jwt_token");
        navigate("/");
    }   

    return (
        <>
            <Navbar />
            <h1 className="myaccount-title">My Account</h1>
            <div className="container" style={{ minHeight: "100vh" }}>
                <div className="row" >
                    <div className="col-lg-5" >
                        <div className="userName-container" style={{ padding: "5%" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-auto">
                                        <div className="image-container">
                                            <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="" className="profile-image" />
                                        </div>
                                    </div>
                                    <div className="col-md-auto">
                                        <h2 className="myaccount-user-name" style={{ fontWeight: "bold" }}>{user.fullName}</h2>
                                        <h5 className="user-details-text">{user.email}</h5>
                                        <h5 className="user-details-text" >{user.mobileNo}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row" style={{ marginTop: "20px" }}>
                                    <div className="col-md-auto" style={{ width: "50%" }}>
                                        <button style={{ width: "100%" }} className="btn btn-success payment-method-button">Payment Methods</button>
                                    </div>
                                    <div className="col-md-auto" style={{ width: "50%" }}>
                                        <button style={{ width: "100%" }} className="btn btn-success payment-method-button">Order History</button>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "20px" }}>
                                    <div className="col-md-auto" style={{ width: "100%" }}>
                                        <button style={{ width: "100%" }} className="btn btn-success">Delivery Addresses</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="userName-container account-info" style={{ backgroundColor: "white", padding: "5%" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <h2 className='myaccount-user-name' style={{ fontWeight: "bold" }}>Account Information</h2>
                                    </div>
                                    <div className="col-lg-2" style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
                                        <a href="" style={{ color: "red", textDecoration: "none", fontSize: "1.2rem" }}>Edit</a>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "15px" }}>
                                    <div className="col-lg-6">
                                        <div className="name-label-container" style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                                            <label htmlFor="">Name</label>
                                            <h5>{user.fullName}</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="name-label-container" style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                                            <label htmlFor="">Mobile Number</label>
                                            <h5>+91-{user.mobileNo}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "15px" }}>
                                    <div className="col-lg-6">
                                        <div className="name-label-container" style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                                            <label htmlFor="">Email</label>
                                            <h5>{user.email}</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="name-label-container" style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                                            <label htmlFor="">Default Address</label>
                                            <h5></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "25px" }}>
                    <div className="col-lg-5">
                        <div className="userName-container" style={{ backgroundColor: "white", height: "auto" }}>
                            <ListGroup style={{ borderRadius: "15px" }}>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <a href="" style={{color: "black",textDecoration:'none'}}><h5>My Orders</h5></a>  </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <a href="" style={{color: "black",textDecoration:'none'}}><h5>WishList</h5></a>  </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <a href="" style={{color: "black",textDecoration:'none'}}><h5>Legal Information</h5></a>  </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <a href="" style={{color: "black",textDecoration:'none'}}><h5>Need Help</h5></a>  </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <a href="" style={{color: "black",textDecoration:'none'}}><h5>Contact Us</h5></a>  </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <a href="" style={{color: "black",textDecoration:'none'}}> <h5>Continue Shopping</h5></a> </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <a href="" style={{color: "black",textDecoration:'none'}} onClick={logout}><h5>Logout</h5></a>  </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account