//TMDB

const API_KEY = "api_key=46a0e90324c4f09a124098dc7d449781"
const BASE_URL = "https://api.themoviedb.org/3"
const POPULAR_URL: string = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY

const IMG_URL = "https://image.tmdb.org/t/p"
const IMG_SIZE_500 = "/w500"
const IMG_SIZE_1920 = "/w1920_and_h800_multi_faces/"
const SERACH_URL = BASE_URL + "/search/movie?" + API_KEY
const MOVIE_URL = BASE_URL + "/movie/"
const AUTHENTICATION_TOKEN = "/authentication/token/"
const REQUEST_TOKEN_URL = BASE_URL + AUTHENTICATION_TOKEN + "new?" + API_KEY
const LOGIN_URL = BASE_URL + AUTHENTICATION_TOKEN + "validate_with_login?" + API_KEY


export { POPULAR_URL, IMG_URL, SERACH_URL, MOVIE_URL, API_KEY, IMG_SIZE_500, IMG_SIZE_1920, REQUEST_TOKEN_URL,LOGIN_URL };