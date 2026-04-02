import { Card, Title, Description, ButtonAdd, CardImagem } from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
  onOpen: () => void
}

const ProductCard = ({ title, description, image, onOpen }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <CardImagem src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{getDescricao(description)}</Description>
      <ButtonAdd onClick={onOpen}>Adicionar ao carrinho</ButtonAdd>
    </Card>
  )
}

export default ProductCard
