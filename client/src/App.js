import { Route, Routes } from 'react-router-dom'
import Favorites from './components/Favorites';
import Main from './components/Main';
import Home from './views/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home /> } >
        <Route path='' element={ <Main /> } />
        <Route path='/favorites' element={ <Favorites /> } />
      </Route>
    </Routes>
    </>
  )
}

export default App;
