import React from 'react';

const Button = ({ title = 'Button', onClick }) => {
  return (
    <>
      <button style={{ marginTop: '5px' }} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default Button;
