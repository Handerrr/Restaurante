import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/estrela.png'
import {
  Card,
  CardContent,
  CardImage,
  Centralizar,
  Descricao,
  Infos,
  Titulo,
} from './styles'

type Props = {
  title: string
  rating: number
  image: string
  description: string
  infos: string[]
}

const RestaurantCard = ({
  title,
  rating,
  image,
  description,
  infos,
}: Props) => (
  <Card>
    <CardImage src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardContent>
      <Centralizar>
        <Titulo>{title} </Titulo>
        <span>
          {rating} <img src={estrela} />
        </span>
      </Centralizar>
      <Descricao>{description}</Descricao>
      <Button type="link" to="/perfil" title="Saiba mais">
        Saiba mais
      </Button>
    </CardContent>
  </Card>
)

export default RestaurantCard
