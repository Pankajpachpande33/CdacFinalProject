import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ApplicationContext from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApplicationContext className="h-auto d-inline-block bg-info w-auto p-3">
      <App/>
    </ApplicationContext>
  </React.StrictMode>
);

