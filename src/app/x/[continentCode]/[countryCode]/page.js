// import { getAllCountries, getContinentByCode } from '@/utils/continents';
import { getContinentByCode } from '@/utils/continents';
import { getAllCountries, getCountryByCode, getCountryFromContinentByIndex, getCountryInContinentIndex } from '@/utils/countries';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CountryPage({ params }) {
  const country = getCountryByCode(params.countryCode);
  const continent = getContinentByCode(params.continentCode);

  const currentCountryIndex = getCountryInContinentIndex(params.countryCode, params.continentCode);
  const previousCountry = getCountryFromContinentByIndex(currentCountryIndex - 1, params.continentCode)
  const nextCountry = getCountryFromContinentByIndex(currentCountryIndex + 1, params.continentCode)



  if (!country.name) return notFound();

  return <main className='max-w-3xl mx-auto min-h-screen py-9'>
    <div className='flex justify-between pb-9'>
      <div className='text-left'>
      <p className='uppercase text-xs font-light text-slate-300'>Previous</p>
        <p><Link href={`/x/${params.continentCode}/${previousCountry.code}`} className='hover:underline'>{previousCountry.name}</Link></p>
      </div>
      <div className='text-right'>
        <p className='uppercase text-xs font-light text-slate-300'>Next</p>
        <p><Link href={`/x/${params.continentCode}/${nextCountry.code}`} className='hover:underline'>{nextCountry.name}</Link></p>
      </div>
    </div>
      <p className='uppercase'><Link href={`/x/${params.continentCode}`} className='hover:underline'>{continent.name}</Link></p>
    <h1 className='font-extrabold text-2xl'>{country.name}</h1>
    <h2 className='font-extrabold text-2xl'>{country.native}</h2>

  <p className='text-9xl'>
    {country.emoji}
  </p>

  <div className='space-y-6'>
    <div>
      <p className='uppercase text-xs font-light text-slate-300'>Capital</p>
        <p>{country.capital}</p>
    </div>

    <div>
      <p className='uppercase text-xs font-light text-slate-300'>Dialling code</p>
        <p>+{country.phone}</p>
    </div>

    <div>
      <p className='uppercase text-xs font-light text-slate-300'>Currency</p>
        <p>{country.currency}</p>
    </div>

    <div>
      <p className='uppercase text-xs font-light text-slate-300'>Official languages</p>
        {country.languages.map((x) => (
          <p key={`language-${x}`}>{x.toUpperCase()}</p>
        ))}
    </div>
  </div>


    
  </main>

}


export async function generateMetadata({ params }) {
  const country = getCountryByCode(params.countryCode);
  const continent = getContinentByCode(params.continentCode);

  return {
    title: `${country.name} | ${continent.name}`,
    description: '',
  };
}

export async function generateStaticParams() {
  
  return getAllCountries().map((x) => ({ continentCode: x.continent, countryCode: x.code }));


}
