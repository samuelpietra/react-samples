import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'

import Sandbox from './pages/Sandbox'

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<Sandbox />} path="/" />
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes
