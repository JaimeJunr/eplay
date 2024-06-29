import * as S from './styles'

import Button from '../Button'
import Tag from '../Tag'
import { RootReducer } from '../../store'

import { useSelector, useDispatch } from 'react-redux'
import { hadleOpen, remove } from '../../store/reducers/cartSlice'
import { formatPrice } from '../ProductsList'

export default function Cart() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const total = items.reduce((sum, item) => sum + (item.prices.current || 0), 0)

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(hadleOpen())} />
      <S.Sidebar>
        {items.map((item, index) => (
          <ul key={index}>
            <S.CartItem>
              <img src={item.media.cover} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => dispatch(remove(item.id))} />
            </S.CartItem>
          </ul>
        ))}

        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {formatPrice(total)}
          <span>em até 6x sem juros</span>
        </S.Prices>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
          variant={'primary'}
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
