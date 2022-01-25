import Image from 'next/image';
import Search from './Search';
import logo from '/public/logo-Rey.webp';

function Navbar() {
  return (
    <nav className="flex items-center px-5 py-3.5 bg-gradient-to-b from-black fixed top-0 right-0 w-full z-10">
      <Image src={logo} alt="logo" width={50} height={50} />
      <Search />
    </nav>
  );
}

export default Navbar;
