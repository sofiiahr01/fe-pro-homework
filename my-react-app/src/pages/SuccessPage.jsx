import React from "react";
import { Container, Typography } from "@mui/material";

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
