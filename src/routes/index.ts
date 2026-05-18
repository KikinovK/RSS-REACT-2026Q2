import { createFileRoute, redirect } from '@tanstack/react-router'
import productsSearchSchema from '../utils/productsSearchSchema'

export const Route = createFileRoute('/')({
  validateSearch: (search) => productsSearchSchema.parse(search),
  beforeLoad: ({ search }) => {
    throw redirect({
      to: '/pokemons',
      search,
    })
  },
})
