import reactLogo from '@/assets/react.svg'
import Column from '@/components/Column'
import { Layout } from '@/components/Layout'
import Row from '@/components/Row'

import viteLogo from '../../../public/vite.svg'

function SandboxPage() {
  return (
    <Layout.Sheet>
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
    </Layout.Sheet>
  )
}

export default SandboxPage
