import Banner from '../components/Banner'
import ProductsList from '../components/ProductsList'
import Game from '../models/Game'

const promoções: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Teste',
    image: '//placehold.it/222x250',
    infos: ['-10%', 'R$ 150'],
    system: 'Windons',
    title: 'Sei la'
  }
]

export default function Categories() {
  return (
    <>
      <Banner />
      <ProductsList title="RPG" background="gray" games={promoções} />
      <ProductsList title="Ação" background="black" games={promoções} />
      <ProductsList title="Aventura" background="gray" games={promoções} />
      <ProductsList title="Fps" background="black" games={promoções} />
    </>
  )
}
