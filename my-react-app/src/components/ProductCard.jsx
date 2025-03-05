import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
            />
            <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {product.description.substring(0, 100)}...
                </Typography>
                <Typography variant="h6">{`$${product.price}`}</Typography>
                <Button variant="contained" color="primary" onClick={handleAddToCart}>
                    Додати в кошик
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
