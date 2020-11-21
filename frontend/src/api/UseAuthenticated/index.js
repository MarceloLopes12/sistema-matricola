import { useCallback } from 'react'
import { useAxios } from '../UseAxios'

export const useAuthenticated = (baseUrl, apiFunctions) => {
  
  const axiosInstance = useAxios(baseUrl)

  const f = apiFunctions(axiosInstance)

  return useCallback({ ...f}, [])
}
