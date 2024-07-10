import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IContactFormProps } from './interfaces/IContactForm';
import { IContact } from './interfaces/IContact';


const ContactForm: React.FC<IContactFormProps> = ({ contact, onSave }) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<number>();

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setPhone(contact.phone);
    }
  }, [contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone) return;
    
    const newContact: IContact = {
      id: contact?.id || uuidv4(),
      name,
      phone,
    };

    onSave(newContact);
    setName('');
  };

  return (
    <div className="add-contact-container">
      <form className="add-contact-form" onSubmit={handleSubmit}>
        <h2>{contact ? 'Editar Contato' : 'Adicionar Contato'}</h2>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="phone">Telefone:</label>
        <input
          type="text"
          inputMode="numeric"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(Number(e.target.value))}
          required
        />
        <button type="submit">{contact ? 'Salvar Alterações' : 'Adicionar'}</button>
      </form>
    </div>
  );
};

export default ContactForm;
