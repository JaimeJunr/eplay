import Banner from '../components/Banner'
import ProductsList from '../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../services/api'

export default function Categories() {
  const { data: action } = useGetActionGamesQuery()
  const { data: rpg } = useGetRpgGamesQuery()
  const { data: fight } = useGetFightGamesQuery()
  const { data: simulation } = useGetSimulationGamesQuery()
  const { data: sport } = useGetSportGamesQuery()

  if (!action || !rpg || !fight || !simulation || !sport) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      <Banner />
      <ProductsList id="rpg" title="RPG" background="black" games={rpg} />
      <ProductsList id="action" title="Ação" background="gray" games={action} />
      <ProductsList
        id="sports"
        title="Esportes"
        background="black"
        games={sport}
      />
      <ProductsList id="fight" title="Luta" background="gray" games={fight} />
      <ProductsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulation}
      />
    </>
  )
}
