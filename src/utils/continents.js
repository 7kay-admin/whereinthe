import { countries, continents } from "countries-list";

export function getAllContinents(){
  

  return Object.entries(continents).map(([code, name]) => ({
    code: code.toLowerCase(), name
  }))
}

export function getContinentByCode(givenCode) {
  const allContinents = getAllContinents();

  return allContinents.filter((x) => x.code === givenCode)[0] || {};
}