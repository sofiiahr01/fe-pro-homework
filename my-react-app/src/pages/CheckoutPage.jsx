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
        <div>
            <h1>Оформлення замовлення</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ім'я</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Прізвище</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Телефон</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Адреса доставки</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>

                <div>
                    <label>Спосіб доставки</label>
                    <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange}>
                        <option value="courier">Кур'єр</option>
                        <option value="pickup">Самовивіз</option>
                        <option value="post">Нова Пошта</option>
                    </select>
                </div>

                <div>
                    <label>Спосіб оплати</label>
                    <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                        <option value="card">Оплата карткою</option>
                        <option value="cash">Готівкою</option>
                        <option value="onDelivery">Оплата при отриманні</option>
                    </select>
                </div>

                <button type="submit">Order</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
