import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from '~pages/main/main-page';
import { SuperheroPage } from '~pages/superhero/superhero-page';

import { ROUTES } from '~shared/lib/routes';

import { Layout } from './app/layout/layout';
import { Providers } from './app/providers';
import './root.css';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={ROUTES.MAIN} element={<MainPage />} />
            <Route path={ROUTES.SUPERHERO()} element={<SuperheroPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Providers>
  );
}

export default App;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
