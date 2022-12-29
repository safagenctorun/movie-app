//TMDB

const API_KEY = "api_key=099719111c03c88dd7a06da496820e3d"
const BASE_URL = "https://api.themoviedb.org/3"
const POPULAR_URL: string = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY

const IMG_URL = "https://image.tmdb.org/t/p"
const IMG_SIZE_500 = "/w500"
const IMG_SIZE_1920 = "/w1920_and_h800_multi_faces/"
const SERACH_URL = BASE_URL + "/search/movie?" + API_KEY
const MOVIE_URL = BASE_URL + "/movie/"
const AUTHENTICATION = "/authentication/"
const REQUEST_TOKEN_URL = BASE_URL + AUTHENTICATION + "token/new?" + API_KEY
const SESSION_URL = BASE_URL + AUTHENTICATION + "session/new?" + API_KEY
const LOGIN_URL = BASE_URL + AUTHENTICATION + "token/validate_with_login?" + API_KEY
const CERTIFICATIONS_URL = BASE_URL + "/certification/movie/list?" + API_KEY
const CONFIGURATION_URL = BASE_URL + "/configuration/" 


export {
    POPULAR_URL,
    IMG_URL,
    SERACH_URL,
    MOVIE_URL,
    API_KEY,
    IMG_SIZE_500,
    IMG_SIZE_1920,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_URL,
    CERTIFICATIONS_URL,
    CONFIGURATION_URL
};