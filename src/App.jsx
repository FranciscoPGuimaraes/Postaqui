/**
 * AppPage - Application Routes
 * @author Francisco Pereira Guimarães
 */

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Receiver from './pages/Receiver'
import Sender from './pages/Sender'
import Package from './pages/Package'
import FinalValue from './pages/FinalValue'

function App() {
  return (
    // Routes
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Sender/>}/>
        <Route exact path='/destino' element={<Receiver/>}/>
        <Route exact path='/pacote' element={<Package/>}/>
        <Route exact path='/valorFinal' element={<FinalValue/>}/>
      </Routes>
    </BrowserRouter>  
    
  )
}

export default App
