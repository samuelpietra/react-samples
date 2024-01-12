import { CSSProperties, PropsWithChildren } from 'react'

import S from './Container.styles'

function Container({ children, ...style }: PropsWithChildren<CSSProperties>) {
  return <S.Main style={{ ...style }}>{children}</S.Main>
}

export default Container
