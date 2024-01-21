import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  return (
    <MenuContext.Provider value={{ menus: menus, setMenus: setMenus }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
