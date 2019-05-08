import http from '@/axios/common/http'
import { apiUrl } from '@/axios/common/common.js'
//login
export function login (userName,password) {
  return http.get(`${apiUrl}login?userName=${userName}&password=${password}`)
}
//register
export function register(phone,password) {
  return http.get(`${apiUrl}register?phone=${phone}&password=${password}`)
}
