import { MovieLists } from '../components';

function HomePage() {
  return (
    <>
      <span className="block w-full border-b-[0.01px] border-gray-600 pt-4 bg-[#26262D]" />
      <main
        id="main-content"
        className="text-white px-5 bg-[#26262D] divide-y divide-gray-600 pt-3 space-y-10 pb-10"
      >
        <MovieLists category="comedy" />
        <MovieLists category="action" />
        <MovieLists category="horror" />
        <MovieLists category="family" />
        <MovieLists category="romance" />
      </main>
    </>
  );
}

export default HomePage;
