import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Initial } from './src/pages/Initial/Initial'
import { SignIn } from './src/pages/SignIn/SignIn'
import { CreateAccount } from './src/pages/CreateAccount/CreateAccount'
import { Footer } from './src/components/Footer/Footer'
import { AccountProvider } from '@/contexts/AccountContext'
import { ForgotPassword } from '@/pages/ForgotPassword/ForgotPassword'
import { AuthProvider } from '@/contexts/AuthContext'
import { RequireAuth } from '@/contexts/RequireAuthContext'
import { Variation } from '@/pages/Variation/Variation'
import { Exchange } from '@/pages/Exchange/Exchange'
import { Favorites } from '@/pages/Favorites/Favorites'

export const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AccountProvider>
          <Routes>
              <Route index element={<Initial />}/>
              <Route path='signin' element={<SignIn />}/>
              <Route path='createaccount' element={<CreateAccount />} />
              <Route path='forgotpassword' element={<ForgotPassword />} />
              <Route path='variacao' element={<RequireAuth><Variation /></RequireAuth>} />
              <Route path='conversao' element={<RequireAuth><Exchange /></RequireAuth>} />
              <Route path='favoritos' element={<RequireAuth><Favorites /></RequireAuth>} />
          </Routes>  
          </AccountProvider>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}
