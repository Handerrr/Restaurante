import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  salmao: '#E66767',
  salmaoClaro: '#FFEBD9',
  corDeFundo: '#FFF8F2',
}

export const GlobalCss = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: Roboto, sans-serif;
   list-style: none;
}

  body {
    background-color: ${cores.corDeFundo};
    color: ${cores.salmao};
  }

  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
`

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px',
}
