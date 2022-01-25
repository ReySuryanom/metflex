import Navbar from './Navbar';

function Header() {
  return (
    <header className="relative">
      <Navbar />
      <div className="w-full min-h-screen bg-[url('/bg-hero.jpg')] bg-cover brightness-[0.6] bg-fixed my-auto" />
      <div className="absolute left-0 w-full my-auto text-center text-white top-[40%] h-full">
        <h1 className="mx-auto text-4xl font-bold md:text-5xl md:w-7/12 lg:text-6xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="mt-3 mb-10 text-xl md:text-2xl lg:text-3xl">
          Watch anywhere. Cancel anytime.
        </p>
        <a
          href="#main-content"
          className="px-5 py-3 text-xl text-[#26262D] font-medium bg-yellow-400 rounded-sm lg:text-2xl hover:bg-yellow-500 duration-100 ease-in-out"
          role="button"
        >
          Watch Now
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#26262D]" />
    </header>
  );
}

export default Header;
