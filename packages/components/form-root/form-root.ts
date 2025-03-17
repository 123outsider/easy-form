import { Arrayable } from '@easy-form/utils'
import { FormItemRule } from 'element-plus'
import { InjectionKey } from 'vue'
export type FormRootType = {
  data: Record<string, unknown>
  rules: Record<string, Array<FormItemRule> | undefined>
  setItem: (key: string, name: unknown) => void
  getItem: (key: string) => unknown
  getRules: (key: string) => Array<FormItemRule>
  setRule: (key: string, rule: Arrayable<FormItemRule>) => void
}
export const FormRootKey = Symbol('FormRootKey') as InjectionKey<FormRootType>
