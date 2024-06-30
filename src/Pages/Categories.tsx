import Banner from '../components/Banner'
import ProductsList from '../components/ProductsList'
import * as Query from '../services/api'

export default function Categories() {
  const { data: action } = Query.useGetActionGamesQuery()
  const { data: rpg } = Query.useGetRpgGamesQuery()
  const { data: fight } = Query.useGetFightGamesQuery()
  const { data: simulation } = Query.useGetSimulationGamesQuery()
  const { data: sport } = Query.useGetSportGamesQuery()

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
