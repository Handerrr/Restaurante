import styled from 'styled-components'
import HeroImg from '../../assets/fundo.png'
import { breakpoints } from '../../styles'

export const Background = styled.div`
  background-image: url(${HeroImg});
  width: 100%;
  height: 360px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: 220px;
  }
`

export const HeroContainer = styled.div`
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-weight: 900;
    font-size: 36px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
    line-height: 42px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 16px;
    }
  }

  img {
    cursor: pointer;
    margin-bottom: 139px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 24px;
      width: 120px;
    }
  }
`
