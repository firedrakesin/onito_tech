import './App.css';
import CForm from './Component/CForm';
import View from './Component/View';
import {BrowserRouter,Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/view' element={<View/>} />
    <Route path='/' element={<CForm/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
