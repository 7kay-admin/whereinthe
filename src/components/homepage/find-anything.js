'use client'

import { getAllCountries } from "@/utils/countries";
import FoundContainer from "./found-container";
import { useState } from "react";

export default function FindAnything() {
    const [searchTerm, setSearchTerm] = useState('');
    const [foundCountries, setFoundCountries] = useState([]);

    const allCountries = getAllCountries();

    function handleChange({ target }) {
        setSearchTerm(target.value);
    
        if (target.value.trim() === '') {
    
          return setFoundCountries([]);
        }
    
        const sanitisedInput = target.value.toLowerCase();
    
        function filterBySearch(list) {
          return list.filter(({ name = '' }) =>
            name.toLowerCase().includes(sanitisedInput)
          );
        }
    
        function prioritiseResults(list) {
          return list.sort(
            ({ name: previousName = '' }, { name: nextName = '' }) =>
              previousName.toLowerCase().replace(/ /g, '').indexOf(sanitisedInput) -
              nextName.toLowerCase().replace(/ /g, '').indexOf(sanitisedInput)
          );
        }
    
        setFoundCountries(prioritiseResults(filterBySearch(allCountries)));
      }

    return (
        <div className="py-9 text-center">
            <h1 className="text-3xl font-extrabold pb-6">
            Find anything
            </h1>
            <input autoComplete="off"
                autoCorrect="false"
                autoFocus type="search" className="bg-slate-900 border border-slate-500 rounded-xl px-6 py-3 mb-3" value={searchTerm} onChange={handleChange} />
            <FoundContainer results={foundCountries} />
        </div>
    )
}