import { MovieLists } from '../components';

function SearchPage({ query }) {
  return (
    <main
      id="main-content"
      className="text-white px-5 bg-[#26262D] divide-y divide-gray-600 pt-3 space-y-10 pb-10 min-h-[15rem]"
    >
      <MovieLists category={query.q} vertical />
    </main>
  );
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}

export default SearchPage;
