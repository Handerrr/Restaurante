import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { HeaderBar, LinkCart } from './styles'

const HeaderPerfil = () => (
  <HeaderBar>
    <div className="container">
      <Link to="/">Restaurantes</Link>

      <img src={logo} alt="E-Food" />

      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </div>
  </HeaderBar>
)

export default HeaderPerfil
