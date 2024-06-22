import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './components/inicio/Inicio'
import Layout from './components/layout/layout'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'

function App() {
return(
  <BrowserRouter>
 
    <Layout>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </Layout>
  </BrowserRouter>
)
        
}

export default App
