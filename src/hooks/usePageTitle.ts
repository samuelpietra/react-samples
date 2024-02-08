import { useCallback, useEffect } from 'react'

function usePageTitle(title?: string) {
  const setPageTitle = useCallback((newTitle?: string) => {
    document.title = newTitle ? `React Samples | ${newTitle}` : 'React Samples'
  }, [])

  useEffect(() => {
    setPageTitle(title)
  }, [setPageTitle, title])

  return setPageTitle
}

export default usePageTitle
