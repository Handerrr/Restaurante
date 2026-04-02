import { Categoria, Content, Imagem, Overlay, Titulo } from './styles'

type Props = {
  titulo: string
  tipo: string
  imagem: string
}

const BannerPerfil = ({ titulo, tipo, imagem }: Props) => (
  <Imagem style={{ backgroundImage: `url(${imagem})` }}>
    <Overlay />
    <Content>
      <Categoria>{tipo}</Categoria>
      <Titulo>{titulo}</Titulo>
    </Content>
  </Imagem>
)

export default BannerPerfil
