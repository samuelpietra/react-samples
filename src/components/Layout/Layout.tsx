import { PropsWithChildren } from 'react'

import * as S from './Layout.styles'
import NAVIGATION_ITEMS from './navigation-items'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <TopBar />

      <S.Container>
        <Sidebar items={NAVIGATION_ITEMS} />

        <S.PageContent>{children}</S.PageContent>
      </S.Container>
    </>
  )
}

const Sheet = ({ children, ...props }: PropsWithChildren<S.SheetProps>) => {
  return <S.Sheet {...props}>{children}</S.Sheet>
}

Layout.Content = S.Content
Layout.Sheet = Sheet

export { Layout }
