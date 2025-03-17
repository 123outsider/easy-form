import { reactive } from 'vue'
import { set, get } from 'lodash-es'
export function useFormRoot() {
  const data = reactive<Record<string, unknown>>({})
  const setItem = (key: string, name: unknown) => {
    set(data, key, name)
  }

  const getItem = (key: string) => {
    return get(data, key)
  }
  return { data, setItem, getItem }
}
