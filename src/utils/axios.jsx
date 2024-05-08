import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDcwZGZkY2I1YmVjOWE4MGQ3ZDg1MWUzMzhhNjM5ZSIsInN1YiI6IjY2MWU3YTNmZWNhZWY1MDE3Y2Y5NTRkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JgGRutU9Fb6Otfkq02fonoxrDCRsdeoWyaPHsCTJWQQ'
      }
})

export default instance;