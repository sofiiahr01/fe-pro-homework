import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../store/cartSlice";
import { Button, Typography, List, ListItem, Box } from "@mui/material";


const CartPage = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id) => dispatch(removeFromCart(id));
    const handleIncrement = (id) => dispatch(incrementQuantity(id));
    const handleDecrement = (id) => dispatch(decrementQuantity(id));

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Кошик</h1>
            <List>
                {cart.map((item) => (
                    <ListItem key={item.id}>
                        <Box display="flex" alignItems="center">
                            <Typography variant="body1">{item.title}</Typography>
                            <Button onClick={() => handleIncrement(item.id)}>+</Button>
                            <Typography>{item.quantity}</Typography>
                            <Button onClick={() => handleDecrement(item.id)}>-</Button>
                            <Typography variant="body1">{`$${item.price * item.quantity}`}</Typography>
                            <Button onClick={() => handleRemove(item.id)} variant="contained" color="secondary">
                                Delite
                            </Button>
                        </Box>
                    </ListItem>
                ))}
            </List>
            <Typography variant="h5">{`Загальна вартість: $${total}`}</Typography>
            <Button variant="contained" color="primary">
                Оформити замовлення
            </Button>
        </div>
    );
};

export default CartPage;
