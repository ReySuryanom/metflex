import useSWR from 'swr';
import { API_KEY, BASE_URL, fetcher } from './config';

function useMovie(search, page = 5) {
  const { data } = useSWR(
    `${BASE_URL}${API_KEY}&s=${search}&page=${page}`,
    fetcher
  );

  return {
    movies: data,
    isLoading: !data,
  };
}

export default useMovie;
