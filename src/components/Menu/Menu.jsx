import React from 'react';

const MenuCard = ({ menu }) => {
  return (
    <div
      style={{
        border: '2px solid black',
        width: '250px',
        height: '250px',
        margin: '5px',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          backgroundColor: 'red',
          width: '80%',
          height: '60%',
          margin: 'auto',
          marginTop: '2px',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'justify',
          listStyle: 'none',
        }}
      >
        <li style={{ fontSize: '1.5em' }}>{menu.title}</li>
        <li style={{ fontSize: '1em' }}>{menu.description}</li>
        <li style={{ fontSize: '1em' }}>{menu.price}</li>
      </div>
    </div>
  );
};

export default MenuCard;
