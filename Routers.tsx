import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Initial } from './src/pages/Initial/Initial'

export const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Initial />}/>
        </Routes>
    </BrowserRouter>
  )
}
