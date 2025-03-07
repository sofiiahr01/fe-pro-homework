import React from "react";
import { Container, Typography } from "@mui/material";
import '../styles/styles.scss';
import '../fonts/fonts.css'

const SuccessPage = () => {
    return (
        <Container className="success-cont">
            <Typography variant="h4">
                Your order has been successfully processed!
            </Typography>
            <Typography>Thank you for shopping at Shopping.ua!</Typography>
        </Container>
    );
};

export default SuccessPage;
