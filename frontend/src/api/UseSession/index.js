import { useAuthenticated } from '../UseAuthenticated'

function sessions(axiosInstance) {

    async function logar(cpf, password) {
          const response = await axiosInstance.post('', {
            cpf,
            password
          })
          return response.data
      }

    return { 
        logar
    }
    
}

export const useSessions = () => useAuthenticated('sessions', sessions)
