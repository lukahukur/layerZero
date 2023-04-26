import { Route, Routes } from 'react-router-dom'
import Main from './components/index'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <span className={'fixed w-full z-[100000]'}>
        <Header />
      </span>
      <Routes>
        <Route path={'/'} element={<Main />} />
      </Routes>
    </>
  )
}

export default App
