import Hero from '../../Components/Hero'
import RestaurantList from '../../Components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando restaurantes ...</h3>
  }

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
