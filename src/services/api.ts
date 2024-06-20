import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay/'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta'
    })
  })
})

export const {
  useGetActionGamesQuery,
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetRpgGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
  useGetGameQuery
} = api

export default api
