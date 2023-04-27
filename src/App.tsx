import { Route, Routes } from 'react-router-dom'
import Main from './Pages/index'
import Developers from './Pages/Developers/Developers'
import { PrivacyPolicy } from './Pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfUse from './Pages/TermsOfUse/TermsOfUse'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/developers'} element={<Developers />} />
        <Route path={'/privacy-policy'} element={<PrivacyPolicy />} />
        <Route path={'/terms-of-use'} element={<TermsOfUse />} />
      </Routes>
    </>
  )
}

export default App
