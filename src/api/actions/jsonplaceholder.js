import { getApiResource } from '../utils'

export const getList = async () => {
  const data = await getApiResource('https://jsonplaceholder.typicode.com/users')

  return data
}
