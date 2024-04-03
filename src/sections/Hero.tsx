import Link from 'next/link';

import { Background } from '@/components/Background';
import { Button } from '@/components/Button';
import { Section } from '@/layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-32">
      <div className="flex items-center flex-col gap-8">
      <div className="text-4xl font-bold text-center">
            <span>{'Best starter kit for '}</span>
            <span className="text-orange-400">Suave developers</span>
          </div>

          <Link href="#">
            <Button xl>Download Your Free Theme</Button>
          </Link>
      </div>
    </Section>
  </Background>
);

export { Hero };
