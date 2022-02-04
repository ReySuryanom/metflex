import useMovie from '../lib/useMovie';
import Error from './Error';
import Loading from './Loading';
import Movie from './Movie';

function MovieLists({ category, vertical }) {
  const { movies, isLoading } = useMovie(category);

  if (isLoading) {
    return <Loading />;
  }

  if (movies?.Response === 'False') {
    return <Error message={movies.Error} />;
  }

  return (
    <section>
      <h2 className="my-4 text-xl font-medium capitalize md:text-2xl lg:text-3xl">
        {!vertical ? category : `Search for "${category}" movies`}
      </h2>
      <div
        className={
          vertical
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center gap-x-5 gap-y-24 mb-24'
            : 'snap-x flex items-center space-x-1 overflow-x-auto'
        }
      >
        {movies?.Search?.map((item) => (
          <Movie key={item.imdbID} {...item} vertical />
        ))}
      </div>
    </section>
  );
}

export default MovieLists;
