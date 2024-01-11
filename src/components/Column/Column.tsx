import { CSSProperties, ReactNode } from 'react'

import S from './Column.styles'

interface Props extends CSSProperties {
  children: ReactNode
}

function Column({ children, ...style }: Props) {
  return <S.Article style={{ ...style }}>{children}</S.Article>
}

export default Column
