import Hero from '../../Components/Hero'
import RestaurantList from '../../Components/RestaurantList'
import type Restaurant from '../../models/Restaurant'
import trattoria from '../../assets/Trattoria.png'
import sushi from '../../assets/sushi.png'

const pratos: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    rating: 4.9,
    category: '',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Japonesa'],
    id: 1,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Italiana'],
    id: 2,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Destaque da semana', 'Italiana'],
    id: 3,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Italiana'],
    id: 4,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Italiana'],
    id: 5,
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Italiana'],
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
