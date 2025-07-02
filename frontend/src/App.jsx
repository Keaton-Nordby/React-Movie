import "./css/App.css";
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <NavBar />
    <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
    </main>
    </div>
  )
}




export default App
