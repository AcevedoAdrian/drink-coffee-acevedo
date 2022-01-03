import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "@chakra-ui/react";
// FIREBASE
import db from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getItem = async (id) => {
    const response = query(
      collection(db, "products"),
      where(documentId(), "==", id)
    );
    const items = [];
    const querySnapshot = await getDocs(response);
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
    setProduct(items[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  return (
    <div className="container-prorduct-detail">
      {isLoading ? (
        <Spinner size="xl" thickness="4px" pt='40px' />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
