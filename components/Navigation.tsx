import { useState } from 'react';

const links = ['Shop', 'About', 'Contact', 'Cart'];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a className="text-sm font-semibold uppercase tracking-[0.35em]" href="#">
          Noir Thread
        </a>

        <button
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="rounded-md border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-8 text-sm uppercase tracking-[0.15em] md:flex">
          {links.map((link) => (
            <li key={link}>
              <a className="transition hover:text-white/70" href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 px-6 py-4 md:hidden" id="mobile-menu">
          <ul className="space-y-3 text-sm uppercase tracking-[0.15em]">
            {links.map((link) => (
              <li key={link}>
                <a className="block py-1 transition hover:text-white/70" href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
