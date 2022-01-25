import Image from 'next/image';

function Movie({ Poster, Title, Type, Year }) {
  return (
    <article className="w-32 snap-center md:w-60 lg:w-64">
      <div className="relative w-32 border border-gray-700 h-44 md:w-60 md:h-72 lg:w-64 lg:h-80">
        <Image
          src={Poster}
          alt={Title}
          layout="fill"
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/128x176.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
        />
      </div>
      <h3 className="mt-3 truncate md:font-bold">{Title}</h3>
      <div className="flex items-center justify-between px-2 mt-4 text-sm text-slate-500">
        <p>({Year})</p>
        <span className="px-3 text-white capitalize bg-gray-600 rounded-sm">
          {Type}
        </span>
      </div>
    </article>
  );
}

export default Movie;
