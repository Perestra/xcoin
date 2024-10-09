import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Initial } from './src/pages/Initial/Initial'
import { Footer } from './src/components/Footer/Footer'
import { SignIn } from './src/pages/SignIn/SignIn'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Initial />}/>
        <Route path='signin' element={<SignIn />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
