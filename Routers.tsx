import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { AccountProvider } from '@/contexts/AccountContext'
import { RequireAuth } from '@/contexts/RequireAuthContext'
import { SignIn } from '@/pages/SignIn/SignIn'
import { CreateAccount } from '@/pages/CreateAccount/CreateAccount'
import { ForgotPassword } from '@/pages/ForgotPassword/ForgotPassword'
import { Initial } from '@/pages/Initial/Initial'
import { Variation } from '@/pages/Variation/Variation'
import { Exchange } from '@/pages/Exchange/Exchange'
import { Favorites } from '@/pages/Favorites/Favorites'
import { Profile } from '@/pages/Profile/Profile'
import { Footer } from '@/components/Footer/Footer'
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage'

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
            <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>   
          <Footer />
        </AccountProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
