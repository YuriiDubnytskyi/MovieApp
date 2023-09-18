import { useState } from 'react';
import { getMovies } from '../../../api/api';

export const useGetMovies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async (search: string) => {
    setLoading(true);
    const movie = await getMovies({ search }).catch(() => setLoading(false));
    setData(movie.data.data);
    setLoading(false);
  };

  return { data, getData, loading };
};
