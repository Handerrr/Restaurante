import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 32px 0 80px;
  max-width: 1024px;
  padding: 0 16px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
