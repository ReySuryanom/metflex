import useMovie from '../lib/useMovie';
import Loading from './Loading';
import Movie from './Movie';

function MovieLists({ category }) {
  const { movies, isLoading } = useMovie(category);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="">
      <h2 className="my-4 text-xl font-medium capitalize md:text-2xl lg:text-3xl">
        {category}
      </h2>
      <div className="flex items-center space-x-1 overflow-x-auto snap-x">
        {movies?.Search.map((item) => (
          <Movie key={item.imdbID} {...item} />
        ))}
      </div>
    </section>
  );
}

export default MovieLists;
