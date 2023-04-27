import { Route, Routes } from 'react-router-dom'
import Main from './Pages/index'
import Header from './components/header/Header'
import Team from './Pages/Team/Team'

function App() {
  return (
    <>
      <span className={'fixed w-screen  z-[100000]'}>
        <Header />
      </span>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/team'} element={<Team />} />
      </Routes>
    </>
  )
}

export default App
