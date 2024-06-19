import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProductsList from '../components/ProductsList'
import { Game } from './Home'

export default function Categories() {
  const [action, setAction] = useState<Game[]>([])
  const [sport, setSport] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])
  const [fight, setFight] = useState<Game[]>([])
  const [simulation, setSimulation] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setAction(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSport(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpg(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFight(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulation(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList title="RPG" background="black" games={rpg} />
      <ProductsList title="Ação" background="gray" games={action} />
      <ProductsList title="Esportes" background="black" games={sport} />
      <ProductsList title="Luta" background="gray" games={fight} />
      <ProductsList title="Simulação" background="black" games={simulation} />
    </>
  )
}
