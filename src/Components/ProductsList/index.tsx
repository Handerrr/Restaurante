import ProductCard from '../ProductCard'
import { List } from './styles'
import type { Product } from '../../models/Products'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <div className="container">
    <List>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </List>
  </div>
)

export default ProductList
