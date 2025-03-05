import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";


const CatalogPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Імітація запиту до API
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Каталог товарів</h1>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CatalogPage;
