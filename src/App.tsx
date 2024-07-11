import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Home from './pages/Home';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { IContact } from './components/interfaces/IContact';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);
  const [page, setPage] = useState<string>('home');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSaveContact = (contact: IContact) => {
    if (selectedContact) {
      setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
    } else {
      setContacts([...contacts, contact]);
    }
    setSelectedContact(null);
    setPage('home');
  };

  const handleEditContact = (contact: IContact) => {
    setSelectedContact(contact);
    setPage('add');
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleNavigate = (page: string) => {
    setPage(page);
    if (page === 'add') {
      setSelectedContact(null);
    }
  };

  return (
    <div className="App">
      {page === 'home' && <Home onNavigate={handleNavigate} />}
      {page === 'add' && (
        <div>
          <button onClick={() => setPage('home')} className="back-button">
          ←
          </button>
          <ContactForm contact={selectedContact} onSave={handleSaveContact} />
        </div>
      )}
      {page === 'list' && (
        <div>
          <button onClick={() => setPage('home')} className="back-button">
          ←
          </button>
          <ContactList
            contacts={contacts}
            onEdit={handleEditContact}
            onDelete={handleDeleteContact}
          />
        </div>
      )}
    </div>
  );
};

export default App;
