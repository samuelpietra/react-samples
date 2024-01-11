import { CSSProperties, ReactNode } from 'react'

import S from './Container.styles'

interface Props extends CSSProperties {
  children: ReactNode
}

function Container({ children, ...style }: Props) {
  return <S.Main style={{ ...style }}>{children}</S.Main>
}

export default Container
