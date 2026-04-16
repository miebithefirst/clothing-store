import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ThreeScene from '@/components/ThreeScene';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-line',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.45, ease: 'power2.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 sm:px-10 lg:px-16" ref={heroRef}>
      <ThreeScene />

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/80 to-charcoal" />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="hero-line mb-6 text-xs uppercase tracking-[0.35em] text-white/70">Minimal / Modern / Timeless</p>
        <h1 className="text-5xl font-semibold leading-tight sm:text-6xl lg:max-w-4xl lg:text-7xl">
          <span className="hero-line block">Designed for movement.</span>
          <span className="hero-line block text-white/70">Built for quiet confidence.</span>
        </h1>
        <p className="hero-line mt-8 max-w-xl text-base text-white/70 sm:text-lg">
          Discover elevated essentials in monochrome palettes with premium fabrics and effortless silhouettes.
        </p>
        <a
          className="hero-cta mt-10 inline-flex rounded-full border border-bone bg-bone px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-charcoal transition hover:bg-transparent hover:text-bone"
          href="#shop"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
