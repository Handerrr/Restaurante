import logo from '../../assets/logo.png'
import { Background, HeroContainer } from './styles'

const Hero = () => (
  <Background>
    <HeroContainer>
      <img src={logo} alt="E-Food" />
      <h1>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </h1>
    </HeroContainer>
  </Background>
)

export default Hero
