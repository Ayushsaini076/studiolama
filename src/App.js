
import './App.css';
import Header from './components/Header';
import Page1 from './components/Page1';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pg2 from './components/Pg2';
import Pg3 from './components/Pg3';
import Pg4 from './components/Pg4';
import Dpage from './components/Dpage';
import Pg5 from './components/Pg5';
// import SandC from './components/SandC';


function App() {
  return (
    <div className="App">
      <Header/>
      
      <BrowserRouter>
      <Routes>
        <Route path='/pg2' element={<Pg2/>}/>
        <Route path='/' element={<Page1/>}/>
        <Route path='/pg3' element={<Pg3/>}/>
        <Route path='/pg4' element={<Pg4/>}/>
        <Route path='/dpage' element={<Dpage/>}/>
        <Route path='/pg5' element={<Pg5/>}/>
        {/* <Route path='/Speech and Communication' element={<SandC/>}/> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
