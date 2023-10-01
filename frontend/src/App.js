import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

import Login from './pages/Login';
import Signup from './pages/Signup';
import { Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const global = useGlobalContext();
  console.log(global);

  const { user } = useAuthContext()

  const orbMemo = useMemo(() => <Orb />, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Router>
          <Navigation />
          <main>
          <Routes>
              <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/income" element={ !user ?<Income /> : <Navigate to="/Icome" />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            </Routes>
          </main>
        </Router>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
