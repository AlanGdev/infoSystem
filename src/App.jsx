import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Accueil from './pages/accueil'
import Cars from './pages/cars'
import Car from './pages/car'
import Header from './components/header'
import Footer from './components/footer'
import Techs from './pages/techs'
import Tech from './pages/tech'
import styles from'./App.module.scss'

function App() {

  return (
    <>
    <Router>
      <div className={styles.app}>
        <Header/>
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/cars' element={<Cars/>}/>
          <Route path='/cars/:id' element={<Car/>}/>
          <Route path='/persons' element={<Techs/>}/>
          <Route path='/persons/:id' element={<Tech/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
    
    </>
  )
}

export default App
