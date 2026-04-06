import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/fundo.png'

export const HeaderBar = styled.header`
  display: flex;
  align-item: center;
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: ${cores.salmao};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`
