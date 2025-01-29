import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import './index.css'

const API_URL = "https://jsonplaceholder.typicode.com/users";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) =>
                setContacts(
                    data.map((user) => ({
                        id: user.id,
                        firstName: user.name.split(" ")[0],
                        lastName: user.name.split(" ").slice(1).join(" "),
                        phone: user.phone,
                    }))
                )
            );
    }, []);

    const handleDelete = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const handleAddContact = (newContact) => {
        setContacts([...contacts, { id: Date.now(), ...newContact }]);
        setShowForm(false);
    };

    return (
        <div>
            <h2>Список контактів</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => handleDelete(contact.id)}>Видалити</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowForm(true)}>Додати контакт</button>
            {showForm && <ContactForm onSave={handleAddContact} onCancel={() => setShowForm(false)} />}
        </div>
    );
}

export default Contacts;
