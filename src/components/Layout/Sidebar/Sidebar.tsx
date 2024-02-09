import { memo } from 'react'
import { useLocation } from 'react-router-dom'

import { Row } from '@/components/Row'

import * as S from './Sidebar.styles'

interface SidebarItemProps {
  isSelected?: (path: string) => boolean
  label: string
  selected?: boolean
  url: string
}

const Item = memo(({ label, selected, url }: SidebarItemProps) => (
  <S.Link to={url} selected={selected}>
    <Row alignItems="center">
      <S.Icon selected={selected} />
      <S.Label selected={selected}>{label}</S.Label>
    </Row>
  </S.Link>
))

interface SidebarProps {
  items: SidebarItemProps[]
}

function Sidebar({ items }: SidebarProps) {
  const location = useLocation()

  return (
    <S.Sidebar>
      <S.List tabIndex={-1}>
        {items.map((props: SidebarItemProps) => {
          const item = (
            <li key={props.url} onKeyDown={() => null}>
              <Item
                {...props}
                selected={props.isSelected?.(location.pathname) ?? location.pathname.startsWith(props.url)}
              />
            </li>
          )

          return item
        })}
      </S.List>
    </S.Sidebar>
  )
}

export type { SidebarItemProps }
export { Sidebar }
