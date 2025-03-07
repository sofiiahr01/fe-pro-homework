import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../store/cartSlice";
import { Button, Typography, List, ListItem, Box } from "@mui/material";
import '../styles/styles.scss';
import '../fonts/fonts.css'

const CartPage = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Хук для перехода на страницу

    const handleRemove = (id) => dispatch(removeFromCart(id));
    const handleIncrement = (id) => dispatch(incrementQuantity(id));
    const handleDecrement = (id) => dispatch(decrementQuantity(id));

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-cont">
            <h1>Cart</h1>
            <List>
                {cart.map((item) => (
                    <ListItem key={item.id}>
                        <Box>
                            <Typography variant="body1">{item.title}</Typography>
                            <Box>
                                <Button onClick={() => handleDecrement(item.id)}>-</Button>
                                <Typography>{item.quantity}</Typography>
                                <Button onClick={() => handleIncrement(item.id)}>+</Button>

                            </Box>
                            <Typography className="sum">{`${item.price * item.quantity} $`}</Typography>
                            <Button className="btn" onClick={() => handleRemove(item.id)} variant="contained">
                                Delete
                            </Button>
                        </Box>
                    </ListItem>
                ))}
            </List>
            <Typography variant="h5">{`Total: ${total} $`}</Typography>

            <Button
                className="order-btn"
                onClick={() => navigate("/checkout")}
            >
                To order
            </Button>
        </div>
    );
};

export default CartPage;
