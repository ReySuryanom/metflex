import Head from 'next/head';
import { Footer, Header, MovieLists } from '../components';

function HomePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <span className="block w-full border-b-[0.01px] border-gray-600 pt-4 bg-[#26262D]" />
      <main className="text-white px-5 bg-[#26262D] divide-y divide-gray-600 pt-3 space-y-10 pb-10">
        <MovieLists category="comedy" />
        <MovieLists category="action" />
        <MovieLists category="horror" />
        <MovieLists category="family" />
        <MovieLists category="romance" />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;