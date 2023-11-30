import React from 'react';

// Componente que recibe un array de elementos y los muestra en una lista desordenada
const UnorderedList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default UnorderedList;