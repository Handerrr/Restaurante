import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { close, goToAddress, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../utils/formatters'
import Address from './StepCart/Address'
import Payment from './StepCart/Payment'
import Finished from './StepCart/Finished'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items, step } = useSelector(
    (state: RootReducer) => state.cart,
  )

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.preco
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {step === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              <span>Valor total </span>
              {formataPreco(getTotalPrice())}
            </Prices>
            {items.length > 0 && (
              <Button
                type="button"
                title="continuar"
                onClick={() => dispatch(goToAddress())}
              >
                Continuar com a entrega
              </Button>
            )}
          </>
        )}
        {step === 'address' && <Address />}
        {step === 'payment' && <Payment />}
        {step === 'finished' && <Finished />}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
