import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import '../styles/styles.scss';
import '../fonts/fonts.css'


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title}/>
            <div><h3>{product.title}</h3>
                <p>{product.price} $</p>

                <Link to={`/product/${product.id}`} className="details-link">
                    More
                </Link></div>

            <button className="pr-btn" onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};

export default ProductCard;
