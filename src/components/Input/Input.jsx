import React from 'react';

const Input = ({ placeholder, name, onChange, ...props }) => {
  return (
    <input
      style={{ marginTop: '2px', padding: '10px', }}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
