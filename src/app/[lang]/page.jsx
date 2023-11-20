"use client";

import SuperQuality from "../sections/SuperQuality";
import Hero from "../sections/hero";
import PopularProducts from "../sections/popular-products";
import Services from "../sections/services";
import SpecialOffer from "../sections/special-offer";

export default function Home() {
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
    </main>
  );
}
