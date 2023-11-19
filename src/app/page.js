import FindAnything from '@/components/homepage/find-anything';
import { getAllContinents, getContinentByCode } from '@/utils/continents';
import { getCountriesByContinent } from '@/utils/countries';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl py-9">

      <FindAnything />


      <ul className='space-y-9'>
        {getAllContinents().map((x) => (
          <li className='space-y-3'>
            <Link href={`/x/${x.code}`} className="hover:underline">
              {x.name}
            </Link>
            <ul className='space-x-1 space-y-1'>
              {getCountriesByContinent(x.code).map((y) => (
<li key={`country-${y.code}`} className='inline-block'>
            <Link href={`/x/${x.code}/${y.code}`} className="hover:underline font-light">
              {y.name}
            </Link>
</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
