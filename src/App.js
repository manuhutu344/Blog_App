import './App.css';
import Post from './componen/Post';
import { Route, Routes } from 'react-router-dom';
import Layout from './componen/Layout';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Post />} />
    <Route path={'/login'} element={<div>Halaman Login</div>} />
    </Route> 
    </Routes>
  );
}

export default App;
