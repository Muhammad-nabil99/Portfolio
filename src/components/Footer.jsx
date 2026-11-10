function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#07090b]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-[#777e80] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <a href="#home" className="text-sm font-bold tracking-[-0.04em] text-white">nabil<span className="text-[#d9a441]">.</span></a>
        <p>Designed and built with care.</p>
        <p>© {new Date().getFullYear()} Nabil. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
