import HeaderPerfil from '../../Components/HeaderPerfil'
import BannerPerfil from '../../Components/Banner'
import ProductList from '../../Components/ProductsList'
import type { Prato, Restaurant } from '../../models/Restaurant'
import { useState, useEffect } from 'react'
import Modal from '../../Components/ProductModal'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurant>()
  const [produtoSelecionado, setProdutoSelecionado] = useState<Prato>()
  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data)
      })
  }, [id])

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
      <ProductList
        products={restaurante.cardapio}
        onOpen={(product) => setProdutoSelecionado(product)}
      />
      {produtoSelecionado && (
        <Modal
          product={produtoSelecionado}
          onClose={() => setProdutoSelecionado(undefined)}
        />
      )}
    </>
  )
}

export default Perfil
