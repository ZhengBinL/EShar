import http from '@/axios/common/http'
import { apiUrl } from '@/axios/common/common.js'
//获取homelist
export function homeList () {
  return http.get(`${apiUrl}hotelList`)
}

//获取searchlist
export function searchList () {
  return http.get(`${apiUrl}brandList`)
}

//获取starlist
export function starList () {
  return http.get(`${apiUrl}starList`)
}