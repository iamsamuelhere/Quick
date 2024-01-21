import React, { useContext } from 'react';

//Componets
import Header from '../components/Header/Header';
import MenuCard from '../components/Menu/Menu';

//contexts
import { MenuContext } from '../contexts/MenuContext';

const MenuView = () => {
  const { menus } = useContext(MenuContext);
  console.log('MENUs', menus);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '20px',
        height: '75vh',
        overflow: 'scroll',
        backgroundColor: 'grey',
      }}
    >
      {menus.map((menu) => (
        <MenuCard menu={menu} />
      ))}
    </div>
  );
};

export default MenuView;
