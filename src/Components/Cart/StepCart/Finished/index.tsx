import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux'
import type { RootReducer } from '../../../../store'
import { close, reset } from '../../../../store/reducers/cart'

const Finished = () => {
  const dispatch = useDispatch()
  const { orderId } = useSelector((state: RootReducer) => state.cart)

  const handleFinish = () => {
    dispatch(reset())
    dispatch(close())
  }

  return (
    <S.Container>
      <h3>Pedido realizado - {orderId}</h3>

      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>

      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>

      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>

      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>

      <button onClick={handleFinish}>Concluir</button>
    </S.Container>
  )
}

export default Finished
