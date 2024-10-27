import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Initial } from './src/pages/Initial/Initial'
import { SignIn } from './src/pages/SignIn/SignIn'
import { CreateAccount } from './src/pages/CreateAccount/CreateAccount'
import { Footer } from './src/components/Footer/Footer'
import { AccountProvider } from '@/contexts/AccountContext'
import { ForgotPassword } from '@/pages/ForgotPassword/ForgotPassword'
import { AuthProvider } from '@/contexts/AuthContext'
import { RequireAuth } from '@/contexts/RequireAuthContext'
import { Home } from '@/pages/Home/Home'

export const Routers = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AccountProvider>
          <Routes>
            <Route index element={<Initial />}/>
            <Route path='signin' element={<SignIn />}/>
            <Route path='createaccount' element={<CreateAccount />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
            <Route path='home' element={<RequireAuth><Home /></RequireAuth>} />
          </Routes>  
          </AccountProvider>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}
