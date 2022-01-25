import { useRouter } from 'next/router';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const searchMovies = (event) => {
    if (event.key === 'Enter' || event?.type === 'click') {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <div className="relative w-2/3 mx-auto md:w-1/2 lg:w-1/3">
      <BiSearch
        className="absolute text-xl text-white left-3 bottom-1.5 cursor-pointer"
        onClick={searchMovies}
      />
      <input
        className="w-full px-10 py-2.5 text-xs bg-transparent placeholder:text-white bg-[#929395] text-white text-center rounded-full outline-none"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Find movies, TV shows and more"
        onKeyPress={searchMovies}
      />
    </div>
  );
}

export default SearchInput;
