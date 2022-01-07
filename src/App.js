import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routs from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routs />
    </BrowserRouter>
  );
}
export default App;
