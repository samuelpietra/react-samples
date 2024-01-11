import styles from './Container.styles'

interface Props {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return (
    <main style={styles.container}>
      {children}
    </main>
  )
}

export default Container
