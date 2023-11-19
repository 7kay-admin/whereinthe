
import { countries } from "countries-list";

export function getAllCountries() {
    return Object.entries(countries).map((x) => ({ code: x[0].toLowerCase(), ...x[1], continent: x[1].continent.toLowerCase()}))
}

export function getCountriesByContinent(givenContinentCode) {

    const continentCountries = Object.entries(countries).filter(([countryCode, countryData]) => countryData.continent.toLowerCase() === givenContinentCode)


    return continentCountries.map((x) => ({ code: x[0].toLowerCase(), ...x[1]}))

}

export function getCountryByCode(givenCountryCode) {
    return countries[givenCountryCode.toUpperCase()] || {}
}
