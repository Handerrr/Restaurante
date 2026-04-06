import { Overlay, ModalContainer, Image, Content, Close } from './styles'
import type { Prato } from '../../models/Restaurant'
import { formataPreco } from '../../utils/formatters'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  product: Prato
  onClose: () => void
}

const Modal = ({ product, onClose }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(product))
    dispatch(open())
    onClose()
  }

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Image src={product.foto} alt={product.nome} />

        <Content>
          <h3>{product.nome}</h3>
          <p>{product.descricao}</p>
          <p>Serve: {product.porcao}</p>
          <button onClick={addToCart}>
            Adicionar ao carrinho - {formataPreco(product.preco)}
          </button>
        </Content>

        <Close onClick={onClose}>X</Close>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
