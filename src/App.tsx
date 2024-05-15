import { BrowserRouter } from 'react-router-dom'
import { Global } from './styles'

import Header from './components/Header'

import Paths from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Header />
      <Paths />
      <Footer />
    </BrowserRouter>
  )
}

export default App
