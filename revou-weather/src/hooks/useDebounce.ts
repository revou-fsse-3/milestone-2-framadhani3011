// src/hooks/useDebounce.ts
import { useRef } from 'react'
const useDebounce = () => {
  let timer = useRef(0)
  const debounce = (
    callback: () => void, // the method you want to call
    delay: number // the time in ms
  ) => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      callback()
    }, delay)
  }
  return { debounce }
}
export default useDebounce
