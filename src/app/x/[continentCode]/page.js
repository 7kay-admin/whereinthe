import { getAllContinents, getContinentByCode } from '@/utils/continents';
import { getCountriesByContinent } from '@/utils/countries';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ContinentPage({ params }) {
  const continent = getContinentByCode(params.continentCode);
  const countries = getCountriesByContinent(params.continentCode);

  if (!continent.name) return notFound();

  return (
    <main className="mx-auto min-h-screen max-w-3xl py-9">
      <h1 className="text-2xl  font-extrabold">{continent.name}</h1>
      <div className="flex flex-col items-center justify-center">
        <ul className="space-x-1 space-y-1">
          {countries.map((x) => (
            <li key={`country-${x.name}`} className="inline-block">
              <Link
                href={`/x/${params.continentCode}/${x.code}`}
                className="hover:underline"
              >
                {x.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return getAllContinents().map((x) => ({ continentCode: x.code }));
}
