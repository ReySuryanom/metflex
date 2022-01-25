function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#202023] text-gray-100 text-center py-2">
      <span className="font-bold">@{currentYear} Rey & Rian</span>. All rights
      reserverd
    </footer>
  );
}

export default Footer;
