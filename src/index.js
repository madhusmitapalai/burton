import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

import '../src/components/banner.css'
import App from './App';
import { ThemeProducer } from './Context';

ReactDOM.render(
  <>
    <React.StrictMode>
      <ThemeProducer>
        <App/>
      </ThemeProducer>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);


