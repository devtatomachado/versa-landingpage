import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home.jsx'

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <img src="texture.jpg" className='texture' />
      </main>
      {/* <Menu /> */}
    </>
  )
}

export default App
