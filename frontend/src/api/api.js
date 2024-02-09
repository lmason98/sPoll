import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 3000
})

function apiHelloWorld() {
  api.get('hello')
    .then(resp => {
      console.log('axios resp :', resp)
    })
    .catch(err => {
      console.log('axios err :', err)
    })
}

export default api
export {
  apiHelloWorld
}
