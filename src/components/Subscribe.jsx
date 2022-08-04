import React from 'react'
import "./styles.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import image from "../assets/homePage.png";
import MediaQuery from "react-responsive";


function Subscribe() {
    return (
        <div className="subscribe-container" style={{  }}>
            <MediaQuery minWidth={1200}>
            <div className="container" style={{ height: "inherit" }}>
                <div className="row" style={{ height: "inherit" }}>
                    <div className="col-lg-6" style={{ display: "flex", flex: 1, justifyContent: "center", flexDirection: "column", height: "inherit" }}>
                        <h1>Don't miss our daily amazing deals.</h1>
                        <h3>Save up to 60% off on your first order</h3>
                        <br/>
                        <br/>
                        <InputGroup className="mb-3" style={{width:"80%"}}>
                            <Form.Control
                                placeholder="Enter your email address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="success" id="button-addon">
                                Subscribe
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="col-lg-6" style={{padding:"90px"}}>
                        <img src={image} alt="" className="hp-subs-img"/>
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <div className="container" style={{ height: "inherit" }}>
                <div className="row" style={{ height: "inherit",overflow:"hidden" }}>
                    <div className="col-lg-6" style={{ display: "flex", flex: 1, justifyContent: "center", flexDirection: "column" }}>
                        <h1>Don't miss our daily amazing deals.</h1>
                        <h3>Save up to 60% off on your first order</h3>
                        <br/>
                        <br/>
                        <InputGroup className="mb-3" style={{width:"100%"}}>
                            <Form.Control
                                placeholder="Enter your email address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="success" id="button-addon">
                                Subscribe
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="col-lg-6">
                        <img src={image} alt="" className="hp-subs-img"/>
                    </div>
                </div>
            </div>
            </MediaQuery>
        </div>
    )
}

export default Subscribe