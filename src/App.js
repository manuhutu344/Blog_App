import './App.css';
import Post from './componen/Post';

function App() {
  return (
    <main>
    <header>
    <a href='' className='logo'>Blog Saya</a>
    <nav>
    <a href=''>Login</a>
    <a href=''>Register</a>
    </nav>
    </header>
    <Post />
    </main>
  );
}

export default App;
