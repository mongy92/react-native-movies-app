export enum MoviesFilter {
  TOP_RATED = 'top_rated',
  UPCOMMING = 'upcoming',
  POPULAR = 'popular',
}

export interface Movie {
  genre_ids: number[];
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}