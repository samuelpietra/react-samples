import { useState } from "react"

import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../assets/react.svg'
import Container from "../../components/Container"

function SandboxPage() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p>
        Click on the Vite and React logos to learn more
      </p>
    </Container>
  )
}

export default SandboxPage
