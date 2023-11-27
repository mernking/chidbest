import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Error from "./page/Error"
import Contact from './page/Contact'

function App() {





  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route index="/" element={<Home />} />
      <Route path='*' element={<Error />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App
