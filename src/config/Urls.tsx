//TMDB

const API_KEY = "api_key=46a0e90324c4f09a124098dc7d449781"
const BASE_URL = "https://api.themoviedb.org/3"
const API_URL:string =  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY
const IMG_URL = "https://image.tmdb.org/t/p/w500"
const SERACH_URL = BASE_URL + "/search/company?" + API_KEY

export { API_URL, IMG_URL, SERACH_URL};