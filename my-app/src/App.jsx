import './App.css'
import { BrowserRouter } from 'react-router'
import Navbar from './Navbar'
import Main from './component/main'
import Footer from './Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Main />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
