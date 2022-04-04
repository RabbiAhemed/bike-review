import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import DashBoard from './Components/DashBoard/DashBoard'
import Blog from './Components/Blog/Blog'
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
