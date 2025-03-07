import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useSelector } from "react-redux";
import '../styles/styles.scss';
import '../fonts/fonts.css'



const Navbar = () => {

    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <AppBar className="nav" position="sticky">
            <Toolbar>
                <Container maxWidth="lg">
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        Sopping.ua
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Catalog
                    </Button>
                    <Button color="inherit" component={Link} to="/cart">
                        Cart
                        {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
