import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = import.meta.env.VITE_API_NEWS;

const fetchNews = async () => {
    try {
        const data = await axios.get(BASE_URL,{
            params: {
                apikey:API_KEY,
                sources: "techcrunch"
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export default fetchNews