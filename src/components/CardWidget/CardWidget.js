import React from 'react';
import { BsCart3 } from "react-icons/bs";
import { Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import './CardWidget.css';
const CardWidget = (props) => {
  return (
    <div className="card-widget">
      <Link to='/cart'>
        <Icon as={BsCart3} w={6} h={6} color='marron.200' />
      </Link>
    </div>
  );
}

export default CardWidget;