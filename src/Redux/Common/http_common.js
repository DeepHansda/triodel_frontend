import axios from 'axios'

export default axios.create({
    baseURL:'https://triodel-backend.vercel.app/api',
    headers: {
        "Content-Type": 'application/json'
    }
})