import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:3000",
    ContentType: {
       header: 'application/json'
    }
})
export default api