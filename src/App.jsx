import MainComp from './components/MainComp'
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/items/page/:page" element={<MainComp />} />
      <Route path="/" element={<Navigate to="/items/page/1" replace />} />
    </Routes>
  );
}

export default App
