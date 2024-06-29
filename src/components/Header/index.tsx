import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../images/logo.svg'
import carrinho from '../../images/carrinho.svg'

import { hadleOpen } from '../../store/reducers/cartSlice'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

export default function Header() {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="container">
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </S.Hamburguer>
            <Link to="/">
              <img src={logo} alt="Eplay" />
            </Link>
            <nav>
              <S.Links>
                <S.LinkItem>
                  <Link to="/categories">Categorias</Link>
                </S.LinkItem>
                <S.LinkItem>
                  <a href="#">Novidades</a>
                </S.LinkItem>
                <S.LinkItem>
                  <a href="#">Promoções</a>
                </S.LinkItem>
              </S.Links>
            </nav>
          </div>
          <S.CartButton onClick={() => dispatch(hadleOpen())}>
            {items.length}
            <span>- produto(s)</span>
            <img src={carrinho} alt="Carrinho de Compras" />
          </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <Link to="/categories">Categorias</Link>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Novidades</a>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Promoções</a>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </div>
  )
}
