import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BlogProvider } from './testing/context';

ReactDOM.render(
  <React.StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
