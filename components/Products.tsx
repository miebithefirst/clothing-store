import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: 'Oversized Coat', price: '$189' },
  { id: 2, name: 'Textured Knit', price: '$96' },
  { id: 3, name: 'Tailored Trouser', price: '$112' },
  { id: 4, name: 'Leather Crossbody', price: '$149' },
  { id: 5, name: 'Relaxed Shirt', price: '$78' },
  { id: 6, name: 'Minimal Sneaker', price: '$135' }
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-card',
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16" id="products" ref={sectionRef}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Featured Products</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Core essentials in focus.</h2>
          </div>
          <a className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-bone" href="#shop">
            View All
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              className="product-card group rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:-translate-y-1 hover:border-white/30"
              key={product.id}
            >
              <div className="mb-4 h-56 rounded-xl bg-gradient-to-br from-white/15 to-white/5" />
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-white/70">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
