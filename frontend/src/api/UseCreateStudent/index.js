import { useAuthenticated } from '../UseAuthenticated'

function createStudent(axiosInstance) {

    async function creater(name, email, cpf, password) {
          const response = await axiosInstance.post('', {
            name,
            email,
            cpf,
            password
          })
          return response.data
      }

    return { 
        creater
    }
    
}

export const useCreateStudent = () => useAuthenticated('students', createStudent)
