import { StateMessage } from '@/components/StateMessage'
import usePageTitle from '@/hooks/usePageTitle'

function HomePage() {
  usePageTitle()

  return <StateMessage type="empty" title="Hello World" subtitle="Nice to see you!" />
}

export default HomePage
