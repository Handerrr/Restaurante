import ProductCard from '../ProductCard'
import { List } from './styles'
import type { Prato } from '../../Models/Restaurant'
import Modal from '../ProductModal'
import { useState } from 'react'

type Props = {
  products: Prato[]
}

const ProductList = ({ products }: Props) => {
  const [modal, setModal] = useState<Prato | null>(null)
  return (
    <div className="container">
      <List>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.nome}
            description={product.descricao}
            image={product.foto}
            onOpen={() => setModal(product)}
          />
        ))}
      </List>

      {modal && <Modal product={modal} onClose={() => setModal(null)} />}
    </div>
  )
}

export default ProductList
