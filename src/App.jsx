import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Provider from './Provider/Provider';
import Profile from './components/Profile/Profile';


function App() {
  return(
      <Provider>
        <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          </BrowserRouter>
          {/* <Home/>
          <About/> */}
        </div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter> */}
      </Provider>
  );
}

export default App;
