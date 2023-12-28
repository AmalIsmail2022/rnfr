import axios from 'axios'
const baseUrl = axios.create({ baseURL: 'http://localhost:5555' })
export default baseUrl