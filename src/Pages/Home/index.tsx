import { useState, useEffect } from 'react'
import Hero from '../../Components/Hero'
import RestaurantList from '../../Components/RestaurantList'
import type { Restaurant } from '../../models/Restaurant'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data)
      })
  }, [])

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
