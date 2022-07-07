import axios from './axiosConfig'

/**
 * 获取全部页面信息
 * @returns
 */
export const getPages = (user) => {
  return axios.get('/api/page/pages')
}
