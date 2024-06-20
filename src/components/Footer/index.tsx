import * as S from './styles'

const date = new Date().getFullYear()

export default function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.SectionFooter>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.ListLinks>
            <li>
              <S.Link to="/categories#rpg">RPG</S.Link>
              <S.Link to="/categories#action">Ação</S.Link>
              <S.Link to="/categories#sports">Esportes</S.Link>
              <S.Link to="/categories#fight">Luta</S.Link>
              <S.Link to="/categories#simulation">Simulação</S.Link>
            </li>
          </S.ListLinks>
        </S.SectionFooter>
        <S.SectionFooter>
          <S.SectionTitle>Acesso Rápido</S.SectionTitle>
          <S.ListLinks>
            <S.Link to="/#on-sale">Promoções</S.Link>
            <S.Link to="/#coming-soon">Em breve</S.Link>
          </S.ListLinks>
        </S.SectionFooter>
        <S.SectionFooter>
          <p>{date} - &copy;E-PLAY Todos os direitos reservados</p>
        </S.SectionFooter>
      </div>
    </S.Footer>
  )
}
