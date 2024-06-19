import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProductsList from '../components/ProductsList'

export interface GalleryType {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_data?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryType[]
  }
}

export default function Home() {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList title="Promoçôes" background="gray" games={promocoes} />
      <ProductsList title="Em Breve" background="black" games={emBreve} />
    </>
  )
}
