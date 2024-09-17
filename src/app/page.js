export const dynamic = 'force-dynamic'
import About from "@/components/Homepage/About";
import Banner from "@/components/Homepage/Banner";
import Services from "@/components/Homepage/Services";

export default function Home() {
  return (
    <div className=''>
      <Banner />
      <About />
      <Services />
    </div>
  );
}
