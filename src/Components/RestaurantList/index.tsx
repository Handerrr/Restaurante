import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

export type Props = {
  background: 'salmao' | 'branco'
  restaurants: Restaurant[]
}

const RestaurantList = ({ background, restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            rating={restaurant.rating}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
