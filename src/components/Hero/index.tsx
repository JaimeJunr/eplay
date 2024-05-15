import banner from '../../images/fundo_hogwarts.png'
import Tag from '../Tag'
import * as S from './styles'

export default function Hero() {
  return (
    <S.Banner style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <div>
          <h2>Hogwarts Legacy</h2>
          <p>
            De R$ 250,00 <br />
            Por R$150,00
          </p>
        </div>
      </div>
    </S.Banner>
  )
}
