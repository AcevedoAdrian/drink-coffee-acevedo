import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartConetext } from '../../context/CartContext';

import { BsCart3 } from "react-icons/bs";
import { Icon } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react'

import './CardWidget.css';

const CardWidget = () => {

  const { getTotalItems } = useContext(CartConetext);

  return (
    <div className="card-widget">
      <Link to='/cart'>
        {getTotalItems() > 0 &&
          <Badge variant='solid' colorScheme='green'>{getTotalItems()}</Badge>}
        <Icon as={BsCart3} w={6} h={6} color='marron.200' />
      </Link>
    </div>
  );
}

export default CardWidget;