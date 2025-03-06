import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Typography, Box, Container } from "@mui/material";


const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <div>Завантаження...</div>;

    return (
        <Container>
            <Box>
                <img src={product.image} alt={product.title} style={{ width: "300px" }} />
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="body1">{product.description}</Typography>
                <Typography variant="h5">{`$${product.price}`}</Typography>
                <Button variant="contained" color="primary">
                    Add to cart
                </Button>
            </Box>
        </Container>
    );
};

export default ProductPage;
