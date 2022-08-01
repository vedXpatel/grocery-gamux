import React, { useState } from 'react'

function AddProduct() {

    const [data, setData] = useState({
        "name": "",
        "price": null,
        "description": "",
        "category": "",
        "quantity": null,
        "createdBy": ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <form action="" style={{display:"flex",flex:1,justifyContent:"center",flexDirection:"column",alignSelf:"center",width:"50vw"}}>
                <input type="text" placeholder="name" onChange={handleChange} />
                <input type="numeric" placeholder="price" onChange={handleChange} />
                <textarea name="description" id="" cols="30" rows="10" placeholder="description" onChange={handleChange}></textarea>
                <select name="category" id="" onChange={handleChange}>
                    <option value="">First</option>
                </select>
                <input type="number" name="quantity" id="" placeholder='quantity' onChange={handleChange} />
                <input type="text" name="createdBy" onChange={handleChange} />
                <input type="file" src="" alt="" placeholder="Add Product Image"/>
            </form>
        </>
    )
}

export default AddProduct