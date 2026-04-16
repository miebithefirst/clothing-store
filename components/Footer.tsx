const footerGroups = [
  {
    title: 'Shop',
    links: ['New Arrivals', 'Outerwear', 'Tops', 'Accessories']
  },
  {
    title: 'Company',
    links: ['About', 'Journal', 'Careers', 'Contact']
  },
  {
    title: 'Social',
    links: ['Instagram', 'TikTok', 'Pinterest', 'X']
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16" id="contact">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em]">Noir Thread</p>
          <p className="mt-4 text-sm text-white/60">Minimalist wardrobe essentials designed with precision.</p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs uppercase tracking-[0.25em] text-white/50">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {group.links.map((link) => (
                <li key={link}>
                  <a className="transition hover:text-bone" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Noir Thread. All rights reserved.</p>
        <p>Made for modern silhouettes.</p>
      </div>
    </footer>
  );
}
