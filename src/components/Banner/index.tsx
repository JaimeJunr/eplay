import * as S from './styles'

import BannerImg from '../../images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

export default function Banner() {
  return (
    <S.Contain style={{ backgroundImage: `url(${BannerImg})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</S.Title>
          <S.Price>
            De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
          </S.Price>
        </div>
        <Button
          type="link"
          to="/produto"
          title={'Clique aqui para aproveitar a oferta'}
        >
          Aproveitar
        </Button>
      </div>
    </S.Contain>
  )
}
