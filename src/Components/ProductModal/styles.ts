import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const ModalContainer = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.branca};
  display: flex;
  max-width: 1024px;
  width: 100%;
  padding: 32px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    max-width: 90%;
    padding: 16px;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
`

export const Content = styled.div`
  flex: 1;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: ${cores.branca};
    color: ${cores.salmao};
    border: none;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;
  }
`

export const Close = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    top: 2px;
    right: 2px;
  }
`
