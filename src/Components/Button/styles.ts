import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 1px solid ${cores.salmao};
  color: ${cores.branca};
  background-color: ${cores.salmao};
  font-size: 14px;
  font-weight: 700;
  padding: 6px 10px;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
`

export const ButtonLink = styled(Link)`
  border: 1px solid ${cores.salmao};
  color: ${cores.branca};
  background-color: ${cores.salmao};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  width: fit-content;
`
