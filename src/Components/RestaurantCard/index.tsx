import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/estrela.png'
import * as S from './styles'

type Props = {
  id: number
  title: string
  rating: number
  image: string
  description: string
  infos: string[]
}

const RestaurantCard = ({
  id,
  title,
  rating,
  image,
  description,
  infos,
}: Props) => (
  <S.Card>
    <S.CardImage src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.CardContent>
      <S.Centralizar>
        <S.Titulo>{title} </S.Titulo>
        <span>
          {rating} <img src={estrela} />
        </span>
      </S.Centralizar>
      <S.Descricao>{description}</S.Descricao>
      <Button type="link" to={`/perfil/${id}`} title="Saiba mais">
        Saiba mais
      </Button>
    </S.CardContent>
  </S.Card>
)

export default RestaurantCard
