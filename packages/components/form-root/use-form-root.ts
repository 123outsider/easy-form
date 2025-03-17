import { reactive } from 'vue'
import { set, get } from 'lodash-es'
import { FormItemRule } from 'element-plus'
import { FormRootType } from './form-root.js'
export function useFormRoot() {
  const data = reactive<Record<string, unknown>>({})
  const rules = reactive<Record<string, Array<FormItemRule>>>({})

  const setItem = (key: string, name: unknown) => {
    set(data, key, name)
  }

  const getItem = (key: string) => {
    return get(data, key)
  }
  const setRule: FormRootType['setRule'] = (key, rule) => {
    const ruleArray = Array.isArray(rule) ? rule : [rule]
    if (!rules[key]) {
      rules[key] = []
    }
    rules[key].push(...ruleArray)
  }
  const getRules = (key: string) => {
    return Array.isArray(rules[key]) ? rules[key] : [rules[key]]
  }
  return { data, rules, setItem, getItem, setRule, getRules }
}
