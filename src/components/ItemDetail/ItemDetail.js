import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { Button, Alert, AlertIcon, Stack, Image } from "@chakra-ui/react";
import "./ItemDetail.css";
import { CartConetext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {

  const { addItem } = useContext(CartConetext);
  const [msj, setMsj] = useState({});
  const [isBuyButton, setIssBuyButton] = useState(true);
  const {
    brand,
    category,
    country,
    region,
    description,
    img,
    precie,
    stock,
    weight,
  } = product;


  const onAdd = (amount) => {
    if (amount > 0) {
      addItem(product, amount);
      setIssBuyButton(false);
      setMsj({
        description: `Usted a seleccionado ${amount}`,
        type: "success",
      });

    } else {
      setMsj({
        description: "Tiene que seleccionar una cantidad",
        type: "error",
      });
    }
  };

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="img-container">
          <Image boxSize="300px" objectFit="cover" src={img} alt="" />
        </div>
        <div className="product-detail-info">
          <h3>{brand}</h3>
          <span>Categoria: {category}</span>
          <span>Pais: {country}</span>
          <span>Region: {region}</span>
          <p>{description}</p>
          <span>Peso: {weight}g</span>
          <span>Precio: ${precie}</span>
          <span>Stock: {stock}</span>
          {isBuyButton ? (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          ) : (
            <>
              <Link to={`/cart`}>
                <Button colorScheme="brand" variant="solid">
                  Finalizar Comprar
                </Button>
              </Link>
              <Link to={`/products`}>
                <Button colorScheme="brand" variant="solid">
                  Seguir Comprando
                </Button>
              </Link>
            </>
          )}
          {msj.description ? (
            <Stack spacing={3}>
              <Alert status={msj.type}>
                <AlertIcon />
                {msj.description}
              </Alert>
            </Stack>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
