import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';
import AppRouter from './routers/AppRouter';

const Padre = styled.div`
  display: flex;
  justify-content: center;
`

ReactDOM.render(
  
  <Padre>
    <AppRouter />,
  </Padre>,
  document.getElementById('root')
);
