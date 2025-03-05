import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";


const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Container maxWidth="lg">
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Мій Інтернет-Магазин
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Каталог
                    </Button>
                    <Button color="inherit" component={Link} to="/cart">
                        Кошик
                    </Button>
                    <Button color="inherit" component={Link} to="/checkout">
                        Оформлення
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
