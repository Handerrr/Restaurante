import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { HeaderBar, LinkCart } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const HeaderPerfil = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div className="container">
        <Link to="/">Restaurantes</Link>

        <img src={logo} alt="E-Food" />

        <LinkCart onClick={openCart}>
          {items.length} produto(s) no carrinho
        </LinkCart>
      </div>
    </HeaderBar>
  )
}

export default HeaderPerfil
