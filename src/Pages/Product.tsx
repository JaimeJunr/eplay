import { useParams } from 'react-router-dom'

import Hero from '../components/Hero'
import Section from '../components/Section'
import Gallery from '../components/Gallery'

import { useGetGameQuery } from '../services/api'

export default function Product() {
  const { id } = useParams<{ id: string }>()

  const { data: game } = useGetGameQuery(id || '')

  console.log(game)

  if (!game) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details?.system}
          <br />
          <b>Desenvolvedor:</b> {game.details?.developer}
          <br />
          <b>Editora:</b> {game.details?.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details?.languages.join(', ')}. As opções de áudio e legendas
          podem ser ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media?.cover}
        items={game.media.gallery}
      />
    </>
  )
}
