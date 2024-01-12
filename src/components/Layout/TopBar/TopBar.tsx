import reactLogo from '@/assets/react.svg'

import * as S from './TopBar.styles'

function TopBar() {
  return (
    <S.TopBar>
      <a href="https://github.com/samuelpietra/react-samples" target="_blank">
        <img src={reactLogo} alt="React logo" />
      </a>

      <h2>React Samples</h2>
    </S.TopBar>
  )
}

export { TopBar }
