import { Route, Routes } from 'react-router'

interface IRoute {
  element: JSX.Element
  path: string
}

const PrivateRoutesCreator = ({ routes }: { routes: IRoute[] }) => {
  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route key={path} element={element} />
      ))}
    </Routes>
  )
}

export type { IRoute }
export { PrivateRoutesCreator }
