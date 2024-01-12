import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import Sandbox from './pages/Sandbox'
import { IRoute } from './RoutesCreator'

const ROUTES: IRoute[] = [
  {
    element: <Sandbox />,
    path: '/sandbox'
  }
]

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {ROUTES.map(({ element, path }) => (
          <Route key={path} element={<Layout>{element}</Layout>} path={path} />
        ))}
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes
