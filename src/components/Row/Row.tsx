import { CSSProperties, ReactNode } from 'react'

import S from './Row.styles'

interface Props extends CSSProperties {
  children: ReactNode
}

function Row({ children, ...style }: Props) {
  return <S.Article style={{ ...style }}>{children}</S.Article>
}

export default Row
