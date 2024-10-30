import React, { useContext } from 'react';
import { UserContext } from '../Components/UserContext/UserContext';

const SomeComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <h1>Bienvenido, {user.name}!</h1>
      ) : (
        <h1>No estás logueado.</h1>
      )}
    </div>
  );
};

export default SomeComponent;
