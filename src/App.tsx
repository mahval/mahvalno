import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayoutPage } from './pages/page-layout/PageLayoutPage';
import { SpritesPage } from './pages/sprites/SpritesPage';
import { WelcomePage } from './pages/welcome/welcome-page';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayoutPage />}>
          <Route index element={<WelcomePage />} />
          <Route path="sprites" element={<SpritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
