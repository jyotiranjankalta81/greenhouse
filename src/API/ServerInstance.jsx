// const baseURL = 'http://localhost:8000/api/'
// const baseURL = 'https://backlom.techjainsupport.co.in/api/'
export const baseURL = 'http://16.16.189.156:8000/api/'
// export const imageBacked = 'http://jyotiranjankalta.tech:8000/'

let token = ''
if (localStorage.getItem('token')) {
  token = JSON.parse(localStorage.getItem('token')).access.token
}
let headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
}

export const serverInstance = (path, method = 'get', payload, token) => {
  return new Promise((resolve, reject) => {
    let fetchOptions = {
      method,
      headers
    }
    if (payload) fetchOptions.body = JSON.stringify(payload)
    fetch(baseURL + path, fetchOptions)
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  })
}
