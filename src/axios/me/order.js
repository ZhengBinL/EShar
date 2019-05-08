import http from '@/axios/common/http'
import { apiUrl } from '@/axios/common/common.js'
//order
export function getOrder (id) {
  return http.get(`${apiUrl}ordersList?user_id=${id}`)
}
