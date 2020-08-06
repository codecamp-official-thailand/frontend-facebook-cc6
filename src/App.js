import React from 'react';
import './App.css';
import PrivateRoutes from './containers/private-routes/PrivateRoutes';

function App() {
  return (
    <PrivateRoutes role="guest" />
  );
}

export default App;
