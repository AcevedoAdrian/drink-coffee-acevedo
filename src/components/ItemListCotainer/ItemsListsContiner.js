import React, { useEffect, useState } from 'react';
// Componnentes Propios
import ItemList from '../ItemList/ItemList';
// React-Router
import { useParams } from 'react-router';
// Chakra-ui
import { Spinner } from '@chakra-ui/react';
// FIREBASE
import db from '../../firebase/firebaseConfig'
import { collection, query, where, getDocs } from 'firebase/firestore';
// Estilos
import './ItemsListsContiner.css';


const ItemsListsContiner = ({ title }) => {

  // Estados
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // Metodo para obtener los productos
  const getAllProducts = async () => {
    const response = query(collection(db, 'products'));
    const items = [];
    const querySnapshot = await getDocs(response);
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
    setProducts(items);
  };

  // Metodo para obtener los productos por categoria
  const getProductsCategory = async (category) => {
    const response = query(
      collection(db, 'products'),
      where('category', '==', category)
    );
    const items = [];
    const querySnapshot = await getDocs(response);
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
    setProducts(items);
  };

  // UseEffect para obtener los productos
  useEffect(() => {
    if (category) {
      getProductsCategory(category);
    } else {
      getAllProducts();
    }
    setIsLoading(false);
  }, [category]);


  return (
    <section className='secction-items-lists'>
      <div className="container">
        <h2 className='h2-items-lists' >{title} {category}</h2>
        {isLoading
          ? <Spinner size='xl' thickness='4px' />
          : <ItemList products={products} />}
      </div>
    </section>
  );
}

export default ItemsListsContiner;