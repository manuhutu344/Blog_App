import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componen/Layout';
import Home from './page/Home';
import Login from './page/Login';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path={'/login'} element={<Login />} />
    </Route> 
    </Routes>
  );
}

export default App;
