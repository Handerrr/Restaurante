import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.branca};
  padding: 8px;
  width: 100%;
`

export const CardImagem = styled.img`
  width: 100%;
  height: 167px;
  padding-bottom: 8px;
  display: block;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 22px;
`

export const ButtonAdd = styled.button`
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  border: none;
  font-size: 14px;
  width: 100%;
  padding: 4px 0;
  font-weight: 700;
  cursor: pointer;
`
