import http from '@/axios/common/http'
import { apiUrl } from '@/axios/common/common.js'
//获取hotelRoomList
export function hotelRoomList (id) {
  return http.get(`${apiUrl}/hotelRoomsList?hotel_id=${id}`)
}