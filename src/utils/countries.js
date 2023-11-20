import { countries } from 'countries-list';

export function getAllCountries() {
  return Object.entries(countries).map((x) => ({
    code: x[0].toLowerCase(),
    ...x[1],
    continent: x[1].continent.toLowerCase(),
  }));
}

export function getCountriesByContinent(givenContinentCode) {
  const continentCountries = Object.entries(countries).filter(
    ([countryCode, countryData]) =>
      countryData.continent.toLowerCase() === givenContinentCode,
  );

  return continentCountries
    .map((x) => ({ code: x[0].toLowerCase(), ...x[1] }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCountryByCode(givenCountryCode) {
  return countries[givenCountryCode.toUpperCase()] || {};
}

export function getCountryInContinentIndex(
  givenCountryCode,
  givenContinentCode,
) {
  return getCountriesByContinent(givenContinentCode)
    .sort((a, b) => a.name.localeCompare(b.name))
    .findIndex((x) => x.code === givenCountryCode);
}

export function getCountryFromContinentByIndex(givenIndex, givenContinentCode) {
  const alphabetisedCountriesInContinent = getCountriesByContinent(
    givenContinentCode,
  ).sort((a, b) => a.name.localeCompare(b.name));

  let sanitisedIndex = givenIndex;

  if (givenIndex === alphabetisedCountriesInContinent.length) {
    sanitisedIndex = 0;
  }

  if (givenIndex === -1) {
    sanitisedIndex = alphabetisedCountriesInContinent.length - 1;
  }

  return (
    alphabetisedCountriesInContinent.filter(
      (_, index) => sanitisedIndex === index,
    )[0] || {}
  );
}
