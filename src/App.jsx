import { BrowserRouter, createBrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pastes' element={<Paste />} />
      <Route path='/pastes/:id' element={<ViewPaste />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
