import styled from 'styled-components'
import { cores } from '../../../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${cores.salmaoClaro};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.salmaoClaro};
    margin-bottom: 16px;
  }

  button {
    height: 32px;
    border: none;
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmao};
    font-weight: bold;
    cursor: pointer;
  }
`
