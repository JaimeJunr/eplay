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
              <S.Link href="#">RPG</S.Link>
              <S.Link href="/">Ação</S.Link>
              <S.Link href="#">Aventura</S.Link>
              <S.Link href="#">Esportes</S.Link>
              <S.Link href="#">Simulação</S.Link>
              <S.Link href="#">Estratégia</S.Link>
              <S.Link href="#">FPS</S.Link>
            </li>
          </S.ListLinks>
        </S.SectionFooter>
        <S.SectionFooter>
          <S.SectionTitle>Acesso Rápido</S.SectionTitle>
          <S.ListLinks>
            <S.Link>Novidades</S.Link>
            <S.Link>Promoções</S.Link>
            <S.Link>Em breve</S.Link>
          </S.ListLinks>
        </S.SectionFooter>
        <S.SectionFooter>
          <p>{date} - &copy;E-PLAY Todos os direitos reservados</p>
        </S.SectionFooter>
      </div>
    </S.Footer>
  )
}
