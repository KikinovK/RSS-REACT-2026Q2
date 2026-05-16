/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'

const AboutPage = () => {
  return <h2>About Pokémon Search</h2>
}

export const Route = createFileRoute('/about')({
  component: AboutPage,
})
