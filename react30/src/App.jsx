import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'
const App = () => {
  return (
<BrowserRouter>
  <Routes>

    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='*' element={<Error/>} />

  

  </Routes>

</BrowserRouter>

  )
}

export default App
