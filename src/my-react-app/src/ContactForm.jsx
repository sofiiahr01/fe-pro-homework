import { useState } from "react";
import './index.css'

function ContactForm({ onSave, onCancel }) {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.phone) return;
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="Ім'я" value={formData.firstName} onChange={handleChange}
                   required/>
            <br/>
            <input type="text" name="lastName" placeholder="Прізвище" value={formData.lastName} onChange={handleChange}
                   required/>
            <br/>
            <input type="text" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange}
                   required/>
            <br/>
            <button type="submit">Зберегти</button>
            <button type="button" onClick={onCancel}>Скасувати</button>
        </form>
    );
}

export default ContactForm;
