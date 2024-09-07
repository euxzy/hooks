import { useCallback, useState } from 'react'

export function useClipboard(): [string, (value: string) => void] {
  const [state, setState] = useState<string>('')

  const copyToClipboard = useCallback((value: string) => {
    const handle = async () => {
      try {
        if (!navigator?.clipboard?.writeText) throw new Error('writeText not suported')

        await navigator.clipboard.writeText(value)
        setState(value)
      } catch (error) {
        defaultCopy(value)
        setState(value)
      }
    }

    handle()
  }, [])

  return [state, copyToClipboard]
}

function defaultCopy(value: string) {
  const tempEl = document.createElement('textarea')
  tempEl.value = value

  document.body.appendChild(tempEl)
  tempEl.select()
  document.execCommand('copy')
  document.body.removeChild(tempEl)
}
