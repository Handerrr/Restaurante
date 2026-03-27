import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-weight: bold;
`
export const Content = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Titulo = styled.h2`
  position: absolute;
  font-size: 32px;
  font-weight: 900;
  bottom: 24px;
  left: 50%;
  transform: translateX(-480px);
  color: ${cores.branca};
`

export const Categoria = styled.span`
  font-size: 32px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 100;
  position: absolute;
  transform: translateX(-480px);
  top: 24px;
  left: 50%;
`
