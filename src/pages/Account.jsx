import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import ListGroup from 'react-bootstrap/ListGroup';
import "./styles.css";

function Account() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user_details")))
    console.log(user);
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
                                        <h5 style={{ color: "#40403f", marginBottom: "0", fontSize: "1.2rem" }}>{user.email}</h5>
                                        <h5 style={{ color: "#40403f", marginBottom: "0", fontSize: "1.2rem" }}>{user.mobileNo}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row" style={{ marginTop: "20px" }}>
                                    <div className="col-md-auto" style={{ width: "50%" }}>
                                        <button style={{ width: "100%" }} className="btn btn-success">Payment Methods</button>
                                    </div>
                                    <div className="col-md-auto" style={{ width: "50%" }}>
                                        <button style={{ width: "100%" }} className="btn btn-success">Order History</button>
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
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <h5>My List</h5> </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <h5>WishList</h5> </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <h5>Legal Information</h5> </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <h5>Need Help</h5> </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <h5>Contact Us</h5> </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <h5>Continue Shopping</h5> </ListGroup.Item>
                                <ListGroup.Item style={{ padding: "4%", fontWeight: "bold", color: "black" }}> <h5>Logout</h5> </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account