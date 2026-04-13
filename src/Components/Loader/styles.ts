import styled, { keyframes } from 'styled-components'
import { cores } from '../../styles'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${cores.salmaoClaro};
  border-top: 4px solid ${cores.salmao};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
