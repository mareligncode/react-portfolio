import axios from 'axios'
// maru
const api = axios.create({
    baseURL: "http://localhost:3000",
    ContentType: {
       header: 'application/json'
    }
})
export default api