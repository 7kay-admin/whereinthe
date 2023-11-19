// import { getAllCountries, getContinentByCode } from '@/utils/continents';
import { getContinentByCode } from '@/utils/continents';
import { getAllCountries, getCountryByCode } from '@/utils/countries';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CountryPage({ params }) {
  const country = getCountryByCode(params.countryCode);
  const continent = getContinentByCode(params.continentCode);
  // const countries = getCountriesByContinent(params.continentCode);

  // // console.log('countries', countries);

  if (!country.name) return notFound();

  return <main className='max-w-3xl mx-auto min-h-screen py-9'>
      <p className='uppercase'><Link href={`/x/${params.continentCode}`} className='hover:underline'>{continent.name}</Link></p>
    <h1 className='font-extrabold text-2xl'>{country.name}</h1>

    <p>{country.capital}</p>
  </main>

  // return <main>
  //   <h1>{country.name}</h1>
  //   <ul>
  //     {countries.map((x) => (
  //       <li key={`country-${x.name}`}>
  //         <Link href={`/x/${params.continentCode}/${x.code}`} className='hover:underline'>
  //           {x.name}
  //         </Link>
  //       </li>
  //     ))}
  //   </ul>
  //   </main>;
}

export async function generateStaticParams() {
  // const blogPosts = getBlogPostSlugs();

 console.log('getAllCountries()', getAllCountries()); 
  
  return getAllCountries().map((x) => ({ continentCode: x.continent, countryCode: x.code }));

  // return blogPosts.map((blogId) => ({ blogId }));
}
