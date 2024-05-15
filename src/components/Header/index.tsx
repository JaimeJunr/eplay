import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../images/logo.svg'
import carrinho from '../../images/carrinho.svg'

export default function Header() {
  return (
    <div className="container">
      <S.HeaderBar>
        <div>
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
        <S.LinkCart href="#">
          0 - produto(s) <img src={carrinho} alt="Carrinho de Compras" />
        </S.LinkCart>
      </S.HeaderBar>
    </div>
  )
}
