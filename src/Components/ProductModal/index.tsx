import { Overlay, ModalContainer, Image, Content, Close } from './styles'
import type { Prato } from '../../models/Restaurant'
import { formataPreco } from '../../utils/formatters'

type Props = {
  product: Prato
  onClose: () => void
}

const Modal = ({ product, onClose }: Props) => (
  <Overlay onClick={onClose}>
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <Image src={product.foto} alt={product.nome} />

      <Content>
        <h3>{product.nome}</h3>
        <p>{product.descricao}</p>
        <p>Serve: {product.porcao}</p>
        <button>Adicionar ao carrinho - {formataPreco(product.preco)}</button>
      </Content>

      <Close onClick={onClose}>X</Close>
    </ModalContainer>
  </Overlay>
)

export default Modal
