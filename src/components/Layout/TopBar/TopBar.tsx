import { FaGithub, FaReact } from 'react-icons/fa'

import { Row } from '@/components/Row'

import * as S from './TopBar.styles'

function TopBar() {
  return (
    <S.TopBar>
      <Row alignItems="center">
        <FaReact aria-label="FaReact" color="#61dbfb" size={32} />

        <h2 style={{ marginLeft: 16 }}>React Samples</h2>
      </Row>

      <a href="https://github.com/samuelpietra/react-samples" target="_blank">
        <FaGithub aria-label="FaGithub" size={32} />
      </a>
    </S.TopBar>
  )
}

export { TopBar }
