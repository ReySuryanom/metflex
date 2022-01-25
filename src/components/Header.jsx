import Navbar from './Navbar';

function Header() {
  return (
    <header className="relative">
      <Navbar />
      <div className="w-full min-h-screen bg-[url('/bg-hero.jpg')] bg-cover brightness-[0.6] bg-fixed my-auto" />
      <div className="absolute left-0 w-full my-auto text-center text-white top-[40%]">
        <h1 className="text-4xl font-bold">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="mt-3 text-xl">Watch anywhere. Cancel anytime.</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#26262D]" />
    </header>
  );
}

export default Header;
