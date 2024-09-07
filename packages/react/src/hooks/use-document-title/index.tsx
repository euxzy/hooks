import { useEffect } from 'react'

export function useDocumentTitle(title: string) {
  useEffect(() => {
    if (!document) return

    document.title = title
  }, [title])
}
