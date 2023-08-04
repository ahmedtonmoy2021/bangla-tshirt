import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
  const [money] = useContext(MoneyContext);
    return (
        <div>
          <h2>Sister</h2>  
          <small>grandpa money : {money} </small>
        </div>
    );
};

export default Sister;