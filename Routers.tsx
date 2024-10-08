import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Initial } from './src/pages/Initial/Initial'
import { Footer } from './src/components/Footer/Footer'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Initial />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
