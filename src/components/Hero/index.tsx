import * as S from './styles'

import Button from '../Button'
import Tag from '../Tag'

import { Game } from '../../Pages/Home'
import { formatPrice } from '../ProductsList'

import { add } from '../../store/reducers/cartSlice'

import { useDispatch } from 'react-redux'

type Props = {
  game: Game
}

export default function Hero({ game }: Props) {
  const dispatch = useDispatch()

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatPrice(game.prices.old)}</span>
            )}

            {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              title="Clique aqui para adicionar esse jogo ao carrinho"
              variant="primary"
              type="button"
              onClick={() => dispatch(add(game))}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}
