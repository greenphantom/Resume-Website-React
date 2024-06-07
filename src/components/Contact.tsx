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
                <li>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li>Phone: {contact.phone}</li>
                <li>Location: {contact.location}</li>
                <li>LinkedIn: <a target='blank' href={contact.linkedin}><i className="bi bi-linkedin"></i></a></li>
            </ul>
        </section>
    );
};

export default Contact;