import Image from 'next/image';

function Movie({ Poster, Title, Type, Year, imdbID }) {
  return (
    <article className="w-32 snap-center">
      <div className="relative w-32 border border-gray-700 h-44">
        <Image
          src={Poster}
          alt={Title}
          layout="fill"
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/128x176.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
        />
      </div>
      <h3 className="mt-3 truncate">{Title}</h3>
    </article>
  );
}

export default Movie;
