import { UserType, verifyToken } from "@/api/user"

const checkToken = async (token: string): Promise<UserType | null> => {
  // const token = document?.cookie?.split('; ').find(row => row.startsWith('token='))?.split('=')[1]
  if (token) {
    const user = await verifyToken(token)
    if ('error' in user) {
      return null
    }
    return user
  }
  return null
}

export default checkToken