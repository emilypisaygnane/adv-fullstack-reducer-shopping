import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './Page/Layout.jsx';
import './Design.css';
import ShoppingListPage from './Page/ShoppingListPage.jsx';
import { getShoppingListItems } from '../services/shopping-list-items.js';

export default function App() {
  // This is just to prove we actually can get some items from Supabase without
  // having to wire everything up. This useEffect and everything in it should be
  // removed once that functionality is proven.
  useEffect(() => {
    getShoppingListItems().then((items) => {
      console.info('items', items);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<ShoppingListPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
