import ProductCard from '../ProductCard'
import { List } from './styles'
import type { Prato } from '../../models/Restaurant'

type Props = {
  products: Prato[]
  onOpen: (product: Prato) => void
}

const ProductList = ({ products, onOpen }: Props) => (
  <div className="container">
    <List>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.nome}
          description={product.descricao}
          image={product.foto}
          onOpen={() => onOpen(product)}
        />
      ))}
    </List>
  </div>
)

export default ProductList
