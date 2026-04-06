import HeaderPerfil from '../../Components/HeaderPerfil'
import BannerPerfil from '../../Components/Banner'
import ProductList from '../../Components/ProductsList'
import { useParams } from 'react-router-dom'
import { useGetPratosQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetPratosQuery(id!)

  if (!restaurante) {
    return <h3>Carregando ...</h3>
  }

  return (
    <>
      <HeaderPerfil />
      <BannerPerfil
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
        imagem={restaurante.capa}
      />
      <ProductList products={restaurante.cardapio} />
    </>
  )
}

export default Perfil
