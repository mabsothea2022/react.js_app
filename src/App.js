import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';             // import css
import HomePage from './page/home/HomePage';
import AboutPage from './page/about/AboutPage';
import LoginPage from './page/auth/LoginPage';
import RegisterPage from './page/auth/RegisterPage';

// main function
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;   // This file call to use in other place

// Must be install library for route-config
