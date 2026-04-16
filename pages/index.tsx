import Head from 'next/head';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Products from '@/components/Products';

export default function Home() {
  return (
    <>
      <Head>
        <title>Noir Thread | Minimalist Clothing</title>
        <meta
          content="Modern minimalist clothing store landing page with animated experiences."
          name="description"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <div className="min-h-screen bg-charcoal text-bone">
        <Navigation />
        <main>
          <Hero />
          <Products />

          <section className="border-y border-white/10 px-6 py-24 sm:px-10 lg:px-16">
            <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/60">New Collection</p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  Crafted essentials for every day, built to last for every season.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a
                  className="rounded-full border border-bone bg-bone px-7 py-3 text-sm font-medium text-charcoal transition hover:bg-transparent hover:text-bone"
                  href="#products"
                >
                  Explore Collection
                </a>
                <a
                  className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium transition hover:border-bone hover:bg-bone hover:text-charcoal"
                  href="#contact"
                >
                  Join Newsletter
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
