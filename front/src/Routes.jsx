import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
