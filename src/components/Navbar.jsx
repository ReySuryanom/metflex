import Image from 'next/image';
import { useRouter } from 'next/router';
import SearchInput from './SearchInput';
import logo from '/public/logo-Rey.webp';

function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center px-5 py-3.5 bg-gradient-to-b from-black fixed top-0 right-0 w-full z-50">
      <Image
        className="cursor-pointer"
        src={logo}
        alt="logo"
        width={50}
        height={50}
        onClick={() => router.push('/')}
      />
      <SearchInput />
    </nav>
  );
}

export default Navbar;
