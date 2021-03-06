import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import Logo from '../../assets/images/logo.svg';
import { Container, Cart } from './style';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
