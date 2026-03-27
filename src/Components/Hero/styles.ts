import styled from 'styled-components'
import HeroImg from '../../assets/fundo.png'

export const Background = styled.div`
  background-image: url(${HeroImg});
  width: 100%;
  height: 360px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`
export const HeroContainer = styled.div`
  padding: 40px 16px;
  align-items: center;
  text-align: center;

  h1 {
    font-weight: 900;
    font-size: 36px;

    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
    line-height: 42px;
    align-items: center;
  }

  img {
    cursor: pointer;
    margin-bottom: 139px;
  }
`
