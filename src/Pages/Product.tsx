import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'

export default function Product() {
  const product = useParams()

  return (
    <>
      <Hero />
    </>
  )
}
