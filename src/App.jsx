import React from 'react'
import { AppRoutes } from './routes/AppRoutes';
import { AuthContextProvider } from './services/AuthContext';

export const App = () => {
  return (
    // <AuthContextProvider>
    <AppRoutes />
    // </AuthContextProvider>
  )
}

export default App;
