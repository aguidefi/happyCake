import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Contacto } from './pages/Contacto'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App
