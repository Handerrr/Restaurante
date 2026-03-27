import { Card, Title, Description, ButtonAdd, CardImagem } from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
}

const ProductCard = ({ title, description, image }: Props) => (
  <Card>
    <CardImagem src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ButtonAdd>Adicionar ao carrinho</ButtonAdd>
  </Card>
)

export default ProductCard
