import { Categoria, Content, Imagem, Overlay, Titulo } from './styles'
import banner from '../../assets/Banner1.png'

const BannerPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <Overlay />
    <Content>
      <Categoria>Italiana</Categoria>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </Content>
  </Imagem>
)

export default BannerPerfil
