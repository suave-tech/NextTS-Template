import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { NAV_ITEMS } from '@/utils/Constants';
import Link from 'next/link';
import { Section } from './Section';

const Header = () => (
  <header>
    <Section yPadding='py-6'>
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/"><Logo /></Link>
    </div>

    <nav>
      <ul className="navbar flex items-center text-xl font-medium text-gray-800">
        {NAV_ITEMS.map((n, i) => (
      <li key={`nav-item-${i}`}>
      <Link href={n.link}>
        <Button type="transparent">
        {n.text}
        </Button>
      </Link>
    </li>
        ))}
      </ul>
    </nav>
  </div>
  </Section>
  </header>
);

export { Header };