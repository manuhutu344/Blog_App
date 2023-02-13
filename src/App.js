import './App.css';
import Post from './componen/Post';
import Nav from './componen/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route index element={
      <main>
    <Nav />
    <Post />
    <Post />
    <Post />
    </main>
    } />
    </Routes>
  );
}

export default App;
