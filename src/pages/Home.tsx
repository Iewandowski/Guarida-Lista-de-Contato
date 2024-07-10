import React from 'react';
import { IHomeProps } from './interfaces/IHomeProps';
  
  const Home: React.FC<IHomeProps> = ({ onNavigate }) => {
    return (
      <div className="home">
        <img src={require('../assets/guarida-logo.png')} alt="" />
        <div className="buttons">
          <button onClick={() => onNavigate('add')}>Adicionar Contato</button>
          <button onClick={() => onNavigate('list')}>Lista de Contatos</button>
        </div>
      </div>
    );
  };
  
  export default Home;
