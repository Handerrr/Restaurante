import Hero from '../../Components/Hero'
import RestaurantList from '../../Components/RestaurantList'
import type Restaurant from '../../models/Restaurant'
import trattoria from '../../assets/Trattoria.png'

const pratos: Restaurant[] = [
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.9,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Destaque da semana', 'Italiana'],
    id: 1,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.9,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Destaque da semana', 'Italiana'],
    id: 2,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.9,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Destaque da semana', 'Italiana'],
    id: 3,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.9,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Destaque da semana', 'Italiana'],
    id: 4,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.9,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Destaque da semana', 'Italiana'],
    id: 5,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.9,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Destaque da semana', 'Italiana'],
    id: 6,
  },
]

const Home = () => (
  <>
    <Hero />
    <RestaurantList restaurants={pratos} />
  </>
)

export default Home
