import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Initial } from './src/pages/Initial/Initial'
import { SignIn } from './src/pages/SignIn/SignIn'
import { CreateAccount } from './src/pages/CreateAccount/CreateAccount'
import { Footer } from './src/components/Footer/Footer'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Initial />}/>
        <Route path='signin' element={<SignIn />}/>
        <Route path='createaccount' element={<CreateAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
