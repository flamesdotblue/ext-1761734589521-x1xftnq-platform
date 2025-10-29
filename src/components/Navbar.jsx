function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-neutral-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded bg-red-500"></span>
          <span className="font-semibold tracking-tight">Launchly Apps</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-neutral-700 md:flex">
          <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
          <a href="#projects" className="hover:text-neutral-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="ml-4 rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}

export default Navbar;
