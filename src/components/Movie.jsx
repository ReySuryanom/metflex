import Image from 'next/image';
import { BsPlayCircle } from 'react-icons/bs';

function Movie({ Poster, Title, Type, Year, vertical }) {
  const isImageAvailable =
    Poster !== 'N/A'
      ? Poster
      : 'https://via.placeholder.com/128x176.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide';

  return (
    <article
      className={
        vertical
          ? 'w-72 h-96 lg:w-64 lg:h-auto'
          : 'snap-center w-32 md:w-60 lg:w-64'
      }
    >
      <div
        className={`relative border border-gray-700 cursor-pointer group ${
          vertical
            ? 'w-72 h-96 lg:w-64 lg:h-80'
            : 'w-32 md:w-60 lg:w-64 h-44 md:h-72 lg:h-80'
        }`}
      >
        <Image
          className="duration-300 ease-in-out group-hover:brightness-50"
          src={isImageAvailable}
          alt={Title}
          layout="fill"
          placeholder="blur"
          objectFit="cover"
          blurDataURL="https://via.placeholder.com/128x176.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
        />
        <BsPlayCircle className="absolute z-10 duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2 opacity-0 left-1/2 top-1/2 text-7xl group-hover:opacity-100" />
      </div>
      <h3 className="mt-3 truncate duration-300 ease-in-out cursor-pointer md:font-bold hover:text-yellow-400">
        {Title}
      </h3>
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
