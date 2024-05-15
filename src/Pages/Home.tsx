import Banner from '../components/Banner'
import ProductsList from '../components/ProductsList'
import Game from '../models/Game'

const promoções: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Teste',
    image: '//place-hold.it/222x250',
    infos: ['-10%', 'R$ 150'],
    system: 'Windons',
    title: 'Sei la'
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Teste',
    image: '//place-hold.it/222x250',
    infos: ['-10%', 'R$ 150'],
    system: 'Windons',
    title: 'Sei la'
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Teste',
    image: '//place-hold.it/222x250',
    infos: ['-10%', 'R$ 150'],
    system: 'Windons',
    title: 'Sei la'
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Teste',
    image: '//place-hold.it/222x250',
    infos: ['-10%', 'R$ 150'],
    system: 'Windons',
    title: 'Sei la'
  }
]

// const emBreve: Game[] = {
//   {

//   }
// }

export default function Home() {
  return (
    <>
      <Banner />
      <ProductsList title="Promoçôes" background="gray" games={promoções} />
      <ProductsList title="Em Breve" background="black" games={promoções} />
    </>
  )
}
