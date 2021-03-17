import {useEffect, useReducer, useState} from 'react'

export function useLogger(value) {
  useEffect(() => {
    console.log(value)
  }, [value])
}
export function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)
  const onChange = event => setValue(event.target.value)
  const clear = () => setValue('')
  return {
    bind: {value, onChange},
    value,
    clear,
  }
}
export function useToggle(initialValue = false) {
  return useReducer(state => !state, initialValue)
}
