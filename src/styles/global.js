import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/fundo.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #191920 url(${background}) no-repeat center top;
  }
  body, input, button{
    font: 14px 'Roboto' sans-serif;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
    font: 14px 'Roboto' sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
