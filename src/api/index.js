/**
 * Created by huayu on 2018/3/31.
 */
import axios from 'axios'


export const RESULT_OK = 0

export function reqSeller() { // 返回是promise对象
  return axios.get('/api2/seller')
}
