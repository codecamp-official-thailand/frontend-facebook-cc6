import React from 'react';
import './App.css';
import PrivateRoutes from './containers/private-routes/PrivateRoutes';

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <PrivateRoutes role="guest" />
    </div>
  );
}

export default App;
