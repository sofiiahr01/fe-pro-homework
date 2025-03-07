import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/styles.scss';
import '../fonts/fonts.css'

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        deliveryMethod: "courier",
        paymentMethod: "card",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate("/success"); // Переход на страницу успеха
        }, 500);
    };

    return (
        <div className="checkout-cont">
            <h1>Оформлення замовлення</h1>
            <form className="form-wrap" onSubmit={handleSubmit}>
                <div>
                    <label>First name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Last name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Delivery address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>

                <div>
                    <label>Delivery method</label>
                    <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange}>
                        <option value="courier">Courier</option>
                        <option value="pickup">Pickup</option>
                        <option value="post">Nova Poshta</option>
                    </select>
                </div>

                <div>
                    <label>Payment method</label>
                    <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                        <option value="card">Card</option>
                        <option value="cash">Cash</option>
                        <option value="onDelivery">COD</option>
                    </select>
                </div>

                <button type="submit">Order</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
