import React, { useState, useEffect } from "react";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [expandedOrder, setExpandedOrder] = useState(null);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(savedOrders);
    }, []);

    const toggleOrderDetails = (id) => {
        setExpandedOrder(expandedOrder === id ? null : id);
    };

    const deleteOrder = (id) => {
        const updatedOrders = orders.filter(order => order.id !== id);
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    return (
        <div>
            <h2>My orders</h2>
            {orders.length === 0 ? <p>There is no orders.</p> : (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            <div onClick={() => toggleOrderDetails(order.id)}>
                                <strong>{order.date}</strong> - {order.total} грн
                            </div>
                            {expandedOrder === order.id && (
                                <ul>
                                    {order.items.map((item, index) => (
                                        <li key={index}>{item.name} x {item.quantity} - {item.price} грн</li>
                                    ))}
                                </ul>
                            )}
                            <button onClick={() => deleteOrder(order.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrdersPage;
