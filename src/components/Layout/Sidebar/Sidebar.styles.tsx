/* eslint-disable react-refresh/only-export-components */
import { Link as DefaultLink } from 'react-router-dom'

import styled, { css } from 'styled-components'

const SIDEBAR_EXPANDED_WIDTH = 248
const SIDEBAR_MEDIA_WIDTH = 1541
const SIDEBAR_WIDTH = 72

const Link = styled(DefaultLink)<{ selected?: boolean }>`
  ${({ selected }) => css`
    background-color: #282c34;
    border-bottom: 1px solid ${selected ? '#61AFEF' : '#1d2025'};
  `}
  align-items: center;
  display: flex;
  padding: 16px 24px;
  text-decoration: none;

  &:hover {
    background-color: #2d313b;

    h4 {
      color: ${({ selected }) => !selected && '#FFF'};
    }
  }
`

const Label = styled.h4<{ selected?: boolean }>`
  ${({ selected }) => css`
    color: ${selected ? '#61AFEF' : '#ABB2BF'};
  `}
  margin-left: 8px;
  white-space: nowrap;
`

const List = styled.ul.attrs({ className: 'scroll-hidden' })`
  flex-grow: 1;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
`

const Sidebar = styled.aside`
  background-color: #282c34;
  border-right: 2px solid #1d2025;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: ${SIDEBAR_EXPANDED_WIDTH}px;
  overflow: hidden;
  width: ${SIDEBAR_EXPANDED_WIDTH}px;
  z-index: 1;
`

export { Label, Link, List, Sidebar, SIDEBAR_WIDTH, SIDEBAR_EXPANDED_WIDTH, SIDEBAR_MEDIA_WIDTH }
