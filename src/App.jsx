import './App.css'
import Logo from './logo/Logo';
import Form from './form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Logo />} /> 

        <Route path='/form' element={<Form />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App
