import { Hero } from '@/sections/Hero';
import { Sponsors } from '@/sections/Sponsors'
import { Features } from '@/sections/Features'
import { Base } from '@/layout/Base';

const Index = () => {
  return (
  <Base className="text-gray-600 antialiased">
    <Hero />
    <Sponsors />
    <Features />
  </Base>
  )
};

export default Index;
