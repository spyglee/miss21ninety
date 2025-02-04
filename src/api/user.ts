export type UserType = {
  email: string
  name: string
  token: string
  _id: string
}

export type ErrorType = {
  error: string
}

export const registerUser = async (name: string, email: string, password: string, confirmPassword: string): Promise<UserType | ErrorType> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    })
    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const loginUser = async (email: string, password: string): Promise<UserType | ErrorType> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const verifyToken = async (token: string): Promise<UserType | ErrorType> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/verify-token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}