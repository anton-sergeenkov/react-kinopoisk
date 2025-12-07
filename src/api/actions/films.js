import { getApiResource, getQueryParams } from '../utils'
import { API_BASIC_URL, API_HEADERS } from '../constants'

export const get = async (id) => {
  const init = {
    method: 'GET',
    headers: API_HEADERS
  }
  const url = API_BASIC_URL+`/v2.2/films/${id}`
  const data = await getApiResource(url, init)

  return data
}

export const getList = async (params = {}) => {
  const init = {
    method: 'GET',
    headers: API_HEADERS
  }
  const queryParams = getQueryParams(params)
  const url = API_BASIC_URL+`/v2.2/films?${queryParams}`
  const data = await getApiResource(url, init)

  return data.items
}

// const params = {
//   keyword: 'Тор'
// }

export const search = async (params = {}) => {
  const init = {
    method: 'GET',
    headers: API_HEADERS
  }
  const queryParams = getQueryParams(params)
  const url = API_BASIC_URL+`/v2.1/films/search-by-keyword?${queryParams}`
  const data = await getApiResource(url, init)

  return data.films
}
