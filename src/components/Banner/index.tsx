import * as S from './styles'
import { useEffect, useState } from 'react'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../Pages/Home'
import { formatPrice } from '../ProductsList'

export default function Banner() {
  const [destaque, setDestaque] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setDestaque(res))
  }, [])

  return (
    <S.Contain style={{ backgroundImage: `url(${destaque?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{destaque?.name}</S.Title>

          <S.Price>
            De <span>{formatPrice(destaque?.prices.old)}</span> <br /> por
            apenas {formatPrice(destaque?.prices.current)}
          </S.Price>
        </div>
        <Button
          variant="secondary"
          type="link"
          to={`/product/${destaque?.id}`}
          title={'Clique aqui para aproveitar a oferta'}
        >
          Aproveitar
        </Button>
      </div>
    </S.Contain>
  )
}
