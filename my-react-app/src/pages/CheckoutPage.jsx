import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/styles.scss';
import '../fonts/fonts.css';

const API_KEY = import.meta.env.VITE_NP_API_KEY;

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        city: "",
        cityRef: "",
        department: "",
        address: "",
        deliveryMethod: "courier",
        paymentMethod: "card",
    });

    const [cities, setCities] = useState([]);
    const [departments, setDepartments] = useState([]);

    // Загружаем города, если выбрана "Nova Poshta"
    useEffect(() => {
        if (formData.deliveryMethod !== "post") return;

        fetch("https://api.novaposhta.ua/v2.0/json/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                apiKey: API_KEY,
                modelName: "Address",
                calledMethod: "getCities",
                methodProperties: {},
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setCities(data.data);
                }
            })
            .catch((error) => console.error("Ошибка загрузки городов:", error));
    }, [formData.deliveryMethod]);

    useEffect(() => {
        if (!formData.cityRef) return;

        fetch("https://api.novaposhta.ua/v2.0/json/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                apiKey: API_KEY,
                modelName: "Address",
                calledMethod: "getWarehouses",
                methodProperties: { CityRef: formData.cityRef },
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setDepartments(data.data);
                }
            })
            .catch((error) => console.error("Ошибка загрузки отделений:", error));
    }, [formData.cityRef]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "city") {
            const selectedCity = cities.find((city) => city.Description === value);
            setFormData({ ...formData, city: value, cityRef: selectedCity?.Ref || "", department: "" });
            setDepartments([]);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate("/success");
        }, 500);
    };

    return (
        <div className="checkout-cont">
            <h1>Checkout</h1>
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
                    <label>Delivery method</label>
                    <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange}>
                        <option value="courier">Courier</option>
                        <option value="pickup">Pickup</option>
                        <option value="post">Nova Poshta</option>
                    </select>
                </div>

                {formData.deliveryMethod === "post" && (
                    <>
                        <div>
                            <label>City</label>
                            <select name="city" value={formData.city} onChange={handleChange} required>
                                <option value="">Select city</option>
                                {cities.map((city) => (
                                    <option key={city.Ref} value={city.Description}>
                                        {city.Description}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label>Department</label>
                            <select name="department" value={formData.department} onChange={handleChange} required>
                                <option value="">Select department</option>
                                {departments.map((dep) => (
                                    <option key={dep.Ref} value={dep.Description}>
                                        №{dep.Number} - {dep.Description}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                )}

                {(formData.deliveryMethod === "courier" || formData.deliveryMethod === "pickup") && (
                    <div>
                        <label>Delivery address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                )}

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
