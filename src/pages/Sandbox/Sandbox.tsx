import reactLogo from '@/assets/react.svg'
import Column from '@/components/Column'
import Container from '@/components/Container'
import Row from '@/components/Row'

import viteLogo from '../../../public/vite.svg'

function SandboxPage() {
  return (
    <Container minHeight="100vh">
      <Column alignItems="center">
        <Row>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" />
          </a>

          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} alt="React logo" />
          </a>
        </Row>

        <h1>Vite + React</h1>
      </Column>
    </Container>
  )
}

export default SandboxPage
