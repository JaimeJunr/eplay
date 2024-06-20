import { Game } from '../../Pages/Home'
import Product from '../Product'

import * as S from './styles'

export type Props = {
  title: string
  id?: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export default function ProductsList({ title, background, games, id }: Props) {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_data) {
      tags.push(game.release_data)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }

    return tags
  }

  return (
    <S.Section id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
                id={game.id}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Section>
  )
}
