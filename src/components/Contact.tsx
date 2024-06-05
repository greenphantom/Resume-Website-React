import React from 'react';
import { Contact as ContactType } from '../models/Contact';

interface ContactProps {
    contact: ContactType;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
    return (
        <section>
            <h2>Contact</h2>
            <ul>
                <li>Email: {contact.email}</li>
                <li>Phone: {contact.phone}</li>
                <li>Location: {contact.location}</li>
                <li>LinkedIn: {contact.linkedin}</li>
            </ul>
        </section>
    );
};

export default Contact;