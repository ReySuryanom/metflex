import { BiSearch } from 'react-icons/bi';

function Search() {
  return (
    <div className="relative w-2/3 mx-auto md:w-1/2 lg:w-1/3">
      <BiSearch className="absolute text-xl text-white left-3 bottom-1.5" />
      <input
        className="w-full px-10 py-2.5 text-xs bg-transparent placeholder:text-white bg-[#929395] text-white text-center rounded-full outline-none"
        type="text"
        placeholder="Find movies, TV shows and more"
      />
    </div>
  );
}

export default Search;
