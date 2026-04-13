import styled from 'styled-components'
import { breakpoints, cores } from '../../../styles'

export const Sidebar = styled.aside`
  background-color: ${cores.salmao};
  width: 360px;
  height: 100vh;
  padding: 24px;
  color: ${cores.branca};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 16px;
`

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 4px;
  display: block;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  margin-bottom: 8px;
  padding: 0 8px;
`

export const Row = styled.div`
  display: flex;
  gap: 8px;

  > div {
    flex: 1;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 32px;
  margin-top: 8px;
  border: none;
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  font-weight: bold;
  cursor: pointer;
`
