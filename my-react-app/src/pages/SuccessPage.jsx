import React from "react";
import { Container, Typography } from "@mui/material";
import '../styles/styles.scss';
import '../fonts/fonts.css'

const SuccessPage = () => {
    return (
        <Container>
            <Typography variant="h4" color="primary">
                Ваше замовлення успішно оформлене!
            </Typography>
            <Typography>Дякуємо за покупку!</Typography>
        </Container>
    );
};

export default SuccessPage;
