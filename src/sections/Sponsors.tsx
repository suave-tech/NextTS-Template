import Image from 'next/image';
import { Section } from '@/layout/Section';

const SPONSERS = [
  [
    {
      link: "#",
      image: "https://dummyimage.com/600x400/ff9d00/fff",
      height: 200,
      width: 260,
      alt: ""
    },
    {
      link: "#",
      image: "https://dummyimage.com/600x400/ff9d00/fff",
      height: 200,
      width: 260,
      alt: ""
    },
    {
      link: "#",
      image: "https://dummyimage.com/600x400/ff9d00/fff",
      height: 200,
      width: 260,
      alt: ""
    },
  ],
  [
    {
      link: "#",
      image: "https://dummyimage.com/600x400/ff9d00/fff",
      height: 200,
      width: 260,
      alt: ""
    },
    {
      link: "#",
      image: "https://dummyimage.com/600x400/ff9d00/fff",
      height: 200,
      width: 260,
      alt: ""
    },
    {
      link: "#",
      image: "https://dummyimage.com/600x400/ff9d00/fff",
      height: 200,
      width: 260,
      alt: ""
    },
  ]
]

const Sponsors = () => (
  <Section
    title="Sponsers"
    description="This is a grid view."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        {SPONSERS.map((row, i) => (
          <tr className="h-56" key={`sponsers-row-${i}`}>
            {row.map((cell, j) => (
                        <td className="border border-gray-300 p-3" key={`sponser-cell-${j}`}>
                        <a
                          href={cell.link}
                          target="_blank"
                        >
                          <Image
                            src={cell.image}
                            alt={cell.alt}
                            width={cell.width}
                            height={cell.height}
                          />
                        </a>
                      </td>
            ))}
            </tr>
        ))}
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
