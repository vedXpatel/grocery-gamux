import React from 'react';
import Product from './Product';
import { popularProducts } from "../data";
import AliceCarousel from 'react-alice-carousel';

function TopProducts() {


    const container = popularProducts.map((item) => (
        <Product item={item} key={item.id} />
    ))

    const responsive = {
        1036: { items: 5 },
        480:{items:1}
    }

    return (
        <>
            <h1 className="category-carousel-title" style={{top:"2vh"}}>Top Deals</h1>
            <AliceCarousel mouseTracking responsive={responsive} autoPlay={true} autoPlayInterval={800} infinite={true} disableDotsControls={false} disableButtonsControls={true} items={container} />
        </>
    )
}

export default TopProducts