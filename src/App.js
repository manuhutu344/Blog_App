import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componen/Layout';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import { UserContextProvider } from './componen/UserContext';
import CreatePost from './page/CreatePost';
import Post from './page/Post';

function App() {
  return (
    <UserContextProvider>
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path={'/login'} element={<Login />} />
    <Route path={'/daftar'} element={<Register />} />
    <Route path={'/buat'} element={<CreatePost />} />
    <Route path={'/post/post/:id'} element={<Post />} />
    </Route> 
    </Routes>
    </UserContextProvider>
  );
}

export default App;
