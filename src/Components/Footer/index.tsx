import { Copyright, FooterContainer, Logo, SocialLinks } from './styles'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

export const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logo} alt="logo" />
      <SocialLinks>
        <li>
          <a href="#">
            <img src={instagram} alt="instagram-logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="facebook-logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="twitter-logo" />
          </a>
        </li>
      </SocialLinks>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Copyright>
    </div>
  </FooterContainer>
)

export default Footer
