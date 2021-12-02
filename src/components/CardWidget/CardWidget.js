import React from 'react';
import { Link } from 'react-router-dom';

import './CardWidget.css';
const CardWidget = (props) => {
  return (
    <div className="card-widget" >
      <Link to='/cart'>
        <i className="fas fa-coffee"></i>
      </Link>
    </div>
  );
}

export default CardWidget;