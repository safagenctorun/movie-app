export interface SearchItemsOutput {
    value: string;
    key: number;
    popularity: number;
}

export interface MoviesOutput {
    adult: boolean;
    backdrop_path?: string;
    genre_ids?: Array<number>;
    id: number;
    media_type?: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}
export interface Genre {
    id: number;
    name: string;
}

export interface MovieDetailOutput extends MoviesOutput {
    belongs_to_collection: {
        backdrop_path: string;
        id: number;
        name: string;
        poster_path: string;
    };
    genres: Array<Genre>;
    budget: number;
    homepage: string;
    imdb_id: string;
    production_companies: Array<ProductionCompany>;
    production_countries: Array<any>;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    };
    status: string;
    tagline: string;
}
export interface Cast_CrewOutput {
    adult: boolean;
    cast_id?: number;
    character: string;
    credit_id?: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order?: number;
    original_name: string;
    popularity: number;
    profile_path?: string;
}

export interface MovieCreditsOutput {
    id: number;
    cast: Array<CreditsOutput>;
    crew: Array<CreditsOutput>;
}
export interface AuthorOutput {
    author: string;
    author_details: {
        avatar_path: string;
        name: string;
        rating: number;
        username: string;
    };
    content: string;
    created_at: string;
    updated_at?: string; 
    id?: string;
    url: string;
}

export interface MovieReviewsOutput {
    id: number;
    page: number;
    total_pages: number;
    total_results: number;
    results: Array<AuthorOutput>;
}

export interface VideosInfoOutput {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
}

export interface MovieVideosOutput {
    id: number;
    results: Array<VideosInfoOutput>;
}

export interface ImagesTypeOutput {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface MovieImagesOutput {
    id: number;
    backdrops: Array<ImagesTypeOutput>;
    logos: Array<ImagesTypeOutput>;
    posters: Array<ImagesTypeOutput>;
}

export interface MovieRecommendationsOutput {
    page: number;
    results: Array<MoviesOutput>;
    total_pages: number;
    total_results: number;
}

export interface CreditsOutput extends Cast_CrewOutput {
    departman: string
    job: string
}

export interface AccountDetailOutput {
    avatar:{
        gravatar:{
            hash:string
        }
        tmdb:{
            avatar_path: string | null 
        }
    }
    id: number
    include_adult: boolean
    iso_639_1: string
    iso_3166_1: string
    name: string
    username: string
}

export interface LanguageOutput {
    english_name: string
    iso_639_1: string
    name?: string
}

