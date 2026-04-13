import type { Restaurant } from '../../Models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.titulo}
            description={restaurant.descricao}
            image={restaurant.capa}
            infos={[restaurant.tipo]}
            rating={restaurant.avaliacao}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
