import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { AuthView } from './auth.view';

export function AppView() {
  return <Router>
          <Routes>
            <Route path="*" element={<AuthView />} />
          </Routes>
  </Router>
}