import http from '@/axios/common/http'
import { apiUrl } from '@/axios/common/common.js'
//login
export function login (userName,password) {
  return http.get(`${apiUrl}login?userName=${userName}&password=${password}`)
}