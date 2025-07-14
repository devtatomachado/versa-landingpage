import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <>
      <main>
        <Outlet className="outlet" />
        <img src="public/texture.jpg" className='texture' />
      </main>
      {/* <Menu /> */}
    </>
  )
}

export default App
