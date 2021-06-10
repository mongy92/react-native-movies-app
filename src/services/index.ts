import { MoviesFilter } from '../utils/types';
import axios_client from './axios_client';

export interface FetchMoviesParams {
  filter: MoviesFilter;
  page: number;
}

export const fetchMoviesList = async (params: FetchMoviesParams) => {
  const { filter, page } = params;

  try {
    const response = await axios_client.get(`movie/${filter}`, {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios_client.get('genre/movie/list');

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCredits = async (movieId: number) => {
  try {
    const response = await axios_client.get(`movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
