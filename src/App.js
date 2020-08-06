import React, { useState } from 'react';
import './App.css';
import PrivateRoutes from './containers/private-routes/PrivateRoutes';
import LocalStorageService from './services/LocalStorage';

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());

  return (
    <div style={{ height: "100vh" }}>
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
