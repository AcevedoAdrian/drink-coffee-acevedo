import React from 'react';
import { Button, Icon } from 'semantic-ui-react'


const ItemCount = ({ stock, initial }) => {

  // State initialization
  const [amount, setAmount] = React.useState(initial);
  const [msj, setMsj] = React.useState('');

  //  Listen to the changes in the input
  const handleChange = (e) => {
    const valueInputCant = e.target.value;
    if (valueInputCant <= stock && valueInputCant >= 0) {
      setAmount(valueInputCant);
    }
    e.target.value = amount;
  }

  // To decrement the number of selected products
  const HandleDecrease = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }
  // To increase the number of selected products
  const HandleIncrease = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  }
  // Button ADD product
  const HandlerAdd = () => {
    if (amount > 0) {
      setMsj(`Usted a seleccionado ${amount}`);
    } else {
      setMsj(`Tiene que seleccionar una cantidad`);
    }

  }
  return (
    <div className="card-add">
      <div className="item-count-container">
        <button className='item-button-decrease' onClick={HandleDecrease}>-</button>
        <input type="number" value={amount} onChange={handleChange} />
        <button className="item-button-increase" onClick={HandleIncrease}>+</button>
      </div>

      <Button animated='fade' onClick={stock > 0 ? HandlerAdd : null} disabled={stock > 0 ? false : true}>
        <Button.Content visible>Agregar al carrito</Button.Content>
        <Button.Content hidden> <Icon name='shop' /></Button.Content>
      </Button>
      <p> {msj}</p>
    </div>
  );
}

export default ItemCount;