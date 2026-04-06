import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/lixo.png'
import { TagContainer } from '../Tag/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  transition: opacity 0.3s;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1;
  padding: 24px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    justify-content: center;
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmao};
    border: none;
    margin-top: 16px;
    width: 100%;
  }
`
export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.salmaoClaro};
  margin-top: 40px;

  span {
    display: block;
  }
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.branca};
  background-color: ${cores.salmaoClaro};
  margin-top: 16px;
  padding: 8px 8px 12px 8px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.salmao};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.salmao};
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 70px;
    right: 8px;
  }
`
