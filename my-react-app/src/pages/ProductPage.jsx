import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Button, Typography, Box, Container, TextField, Grid } from "@mui/material";
import '../styles/styles.scss';
import '../fonts/fonts.css'

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                fetch(`https://fakestoreapi.com/products/category/${data.category}`)
                    .then((res) => res.json())
                    .then((similar) => {
                        setSimilarProducts(similar.filter((item) => item.id !== data.id));
                    });
            });
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity: Number(quantity) }));
    };

    if (!product) return <div>Завантаження...</div>;

    return (
        <Container>
            <Box display="flex" gap={4} alignItems="center">
                <img src={product.image} alt={product.title} style={{ width: "300px" }} />
                <Box>
                    <Typography variant="h4">{product.title}</Typography>
                    <Typography variant="body1">{product.description}</Typography>
                    <Typography variant="h5">{`$${product.price}`}</Typography>

                    {/* Вибір кількості */}
                    <Box display="flex" alignItems="center" gap={2} mt={2}>
                        <TextField
                            type="number"
                            label="Кількість"
                            variant="outlined"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            inputProps={{ min: 1 }}
                            sx={{ width: "100px" }}
                        />
                        <Button variant="contained" color="primary" onClick={handleAddToCart}>
                            Додати в кошик
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Схожі товари */}
            <Box mt={5}>
                <Typography variant="h5">Схожі товари</Typography>
                <Grid container spacing={2}>
                    {similarProducts.slice(0, 4).map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={3}>
                            <Box
                                onClick={() => navigate(`/product/${item.id}`)}
                                sx={{
                                    cursor: "pointer",
                                    border: "1px solid #ddd",
                                    padding: 2,
                                    borderRadius: 2,
                                    textAlign: "center",
                                }}
                            >
                                <img src={item.image} alt={item.title} style={{ width: "100px" }} />
                                <Typography variant="body1">{item.title}</Typography>
                                <Typography variant="h6">{`$${item.price}`}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default ProductPage;
