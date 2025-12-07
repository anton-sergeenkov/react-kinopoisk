export const getApiResource = async (url, init = {}) => {
  try {
    const res = await fetch(url, init)

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      // throw new Error("Ответ сети был не ok")
      return false
    }

    return await res.json()
  } catch (error) {
    console.error("Could not fetch.", error.message)
    return false
  }
};

export const getQueryParams = (params = {}) => {
  const queryParams = new URLSearchParams(params).toString()

  return queryParams
}
