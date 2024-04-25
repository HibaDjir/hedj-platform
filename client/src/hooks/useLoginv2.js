
import { useState} from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
      

    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    console.log(response.status)
    if (!response.ok) {
      setIsLoading(false)
      setError(json.message)
      console.log('the Json message',json.message) 
      console.log('The use error',error)
      console.log('the loading ',isLoading)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }



  return { login, error, isLoading }
}

   // try {
    // const response = await fetch('http://localhost:3000/api/users/login', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({ email, password })
    // })
    // const json = await response.json()
     
    // console.log(json.message)
    // setError(json.message)
    // console.log(error)
    // console.log(response, "response")
    // console.log(json.error,"json error")
   
  //   if (!response.ok) {

  //     setIsLoading(false)
  //     // const errorMessage = json.error || 'An error occurred.';
  //     setError(json.message)
  //     // console.log(error)
  //   }
  //   if (response.ok) {
  //     // save the user to local storage
  //     localStorage.setItem('user', JSON.stringify(json))
  //     // update the auth context
  //     dispatch({type: 'LOGIN', payload: json})
  //     // update loading state
  //     setIsLoading(false)
  //   }
  //   console.log(isLoading)
  // }catch(err){
  //   setError(err.message)
  // }
  // }