import axios from 'axios'

export function useAxios(contextUrl, headers) {
  const baseUrl = contextUrl ? `/${contextUrl}` : ''

  const instance = axios.create({
    baseURL: `http://192.168.15.7:3333${baseUrl}`,
    headers,
  })

  return instance
}
