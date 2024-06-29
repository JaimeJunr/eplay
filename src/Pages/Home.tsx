import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProductsList from '../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../services/api'

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
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetSoonQuery()

  if (!promocoes || !emBreve) {
    return (
      <>
        <Banner />
        <h3>Loading...</h3>
      </>
    )
  }

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        title="Promoçôes"
        background="gray"
        games={promocoes}
      />
      <ProductsList
        id="coming-soon"
        title="Em Breve"
        background="black"
        games={emBreve}
      />
    </>
  )
}
