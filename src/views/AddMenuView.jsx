import React, { useState, useContext } from 'react';

//componets
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

//Contexts
import { MenuContext } from '../contexts/MenuContext';
const AddMenuView = () => {
  const { menus, setMenus } = useContext(MenuContext);

  const [menuDetails, setMenuDetails] = useState({
    title: '',
    description: '',
    price: '',
  });

  const onInputChange = (e) => {
    setMenuDetails({ ...menuDetails, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        border: '0.7px solid black',
        padding: '10px',
        width: '50vh',
        margin: 'auto',
        marginTop: '5px',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        <p style={{ margin: 'auto' }}>Add Menu</p>
        <Input name="title" placeholder="Title" onChange={onInputChange} />
        <Input
          name="description"
          placeholder="Description"
          onChange={onInputChange}
        />

        <div
          style={{
            display: 'flex',
            marginTop: '1px',
          }}
        >
          <Input name="price" placeholder="Price" onChange={onInputChange} />
          <Button
            title="Upload Photo"
            onClick={() => {
              alert('Helloi');
            }}
          />
          <Button
            title="Add Menu"
            type="submit"
            onClick={(e) => {
              setMenus([...menus, menuDetails]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddMenuView;
