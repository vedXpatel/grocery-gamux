import React from 'react';
import "./styles.css";
import AliceCarousel from 'react-alice-carousel';
import MediaQuery from "react-responsive";
import 'react-alice-carousel/lib/alice-carousel.css';
import apple from "../assets/apple.png";
import peach from "../assets/peach.png";
import orange from "../assets/orange.png";
import potato from "../assets/potato.png";
import carrot from "../assets/carrot.png";
import tomato from "../assets/tomato.png";
import broccoli from "../assets/broccoli.png";
import cucumber from "../assets/cucumber.png";
import onion from "../assets/onion.png";


const Explore = () => {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        {
            image: <img className="explore-category-image" src={apple} onDragStart={handleDragStart} alt="" />,
            name: "Apple",
            description: "Lorem ipsum dolor sit.",
            price: 10
        },
        {
            image: <img className="explore-category-image" src={peach} onDragStart={handleDragStart} alt="" />,
            name: "Apple",
            description: "Lorem ipsum dolor sit.",
            price: 10
        },
        {
            image: <img className="explore-category-image" src={orange} onDragStart={handleDragStart} alt="" />,
            name: "Apple",
            description: "Lorem ipsum dolor sit.",
            price: 10
        },
        {
            image: <img className="explore-category-image" src={potato} onDragStart={handleDragStart} alt="" />,
            name: "Apple",
            description: "Lorem ipsum dolor sit.",
            price: 10
        },
        {
            image: <img className="explore-category-image" src={carrot} onDragStart={handleDragStart} alt="" />,
            name: "Apple",
            description: "Lorem ipsum dolor sit.",
            price: 10
        },
        {
            image: <img className="explore-category-image" src={tomato} onDragStart={handleDragStart} alt="" />,
            name: "Apple",
            description: "Lorem ipsum dolor sit.",
            price: 10
        },
        {
            image: <img className="explore-category-image" src={broccoli} onDragStart={handleDragStart} alt="" />,
            name: "Apple",
            description: "Lorem ipsum dolor sit.",
            price: 10
        },
        {
            image: <img className="explore-category-image" src={cucumber} onDragStart={handleDragStart} alt="" />,
            name: "Apple",
            description: "Lorem ipsum dolor sit.",
            price: 10
        },
        {
            image: <img className="explore-category-image" src={onion} onDragStart={handleDragStart} alt="" />,
            name: "Apple",
            description: "Lorem ipsum dolor sit.",
            price: 10
        },
    ]

    const responsive = {
        1036: { items: 5 },
        480:{items:1}
    }

    const colorsArray = ["#FEEFEA", "#FFF3FF", "#F2FCE4", "#FEEFEA", "#ECFFEC", "#FFFCEB", "#DEF9EC", "#FEEFEA", "#FFF3FF"]

    const indContainer = items.map((item, index) => {
        return (
            <div className="individual-container" style={{ backgroundColor: colorsArray[index]}}>
                {item.image}
                <div className="description-box">
                    <h1 className="explore-category-title">{item.name}</h1>
                    <h3 className="explore-category-description">{item.description}</h3>
                    <p className="explore-category-price">${item.price}</p>
                </div>
            </div>
        )
    })


    return (
        <>
            <h1 className="category-carousel-title">Explore Categories</h1>
            <AliceCarousel mouseTracking responsive={responsive} autoPlay={true} autoPlayInterval={800} infinite={true} disableDotsControls={false} disableButtonsControls={true} items={indContainer} />
        </>
    )
}

export default Explore;