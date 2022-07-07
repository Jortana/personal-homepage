import axios from './axiosConfig'

/**
 * 登录
 * @returns
 */
export const login = (user) => {
  return axios.post('/api/user/login', user)
}
