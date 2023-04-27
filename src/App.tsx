import { Route, Routes } from 'react-router-dom'
import Main from './Pages/index'
import Developers from './Pages/Developers/Developers'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/developers'} element={<Developers />} />
      </Routes>
    </>
  )
}

export default App
