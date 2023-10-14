import List from "@/components/list";
import Service from "@/components/service";
import Reviews from "@/components/reviews";
import Vision from "@/components/vision";
import Subscribe from "@/components/subscribe";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <List />
      <Service />
      <Reviews />
      <Vision />
      <Subscribe />
    </main>
  );
}
