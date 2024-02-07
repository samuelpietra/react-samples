import { FaReact, FaGithub } from 'react-icons/fa'

import * as S from './TopBar.styles'
import Row from '@/components/Row'

function TopBar() {
  return (
    <S.TopBar>
      <Row alignItems="center">
        <FaReact color="#61dbfb" size={32} />

        <h2 style={{ marginLeft: 16 }}>React Samples</h2>
      </Row>

      <a href="https://github.com/samuelpietra/react-samples" target="_blank">
        <FaGithub color="#ccc" size={32} />
      </a>
    </S.TopBar>
  )
}

export { TopBar }
