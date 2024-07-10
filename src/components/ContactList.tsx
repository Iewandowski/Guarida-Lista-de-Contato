import React from 'react';
import { IContactListProps } from './interfaces/IContactList';



const ContactList: React.FC<IContactListProps> = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="container">
      <h2>Lista de Contatos</h2>
      {contacts.length === 0 ? (
        <p>Nenhum contato encontrado.</p>
      ) : (
        <ul className="contact-list">
          <li className="header">
            <div className="name">Nome</div>
            <div className="phone">Telefone</div>
            <div className="actions">Ações</div>
          </li>
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              <div className="name">{contact.name}</div>
              <div className="phone">{contact.phone}</div>
              <div className="actions">
                <button onClick={() => onEdit(contact)}>✎</button>
                <button onClick={() => onDelete(contact.id)}>✖</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
