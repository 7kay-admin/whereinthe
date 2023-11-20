'use client';

import { getAllCountries } from '@/utils/countries';
import FoundContainer from './found-container';
import { useState, Fragment } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Dialog, Transition } from '@headlessui/react';

export default function FindAnything() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
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
        name.toLowerCase().includes(sanitisedInput),
      );
    }

    function prioritiseResults(list) {
      return list.sort(
        ({ name: previousName = '' }, { name: nextName = '' }) =>
          previousName.toLowerCase().replace(/ /g, '').indexOf(sanitisedInput) -
          nextName.toLowerCase().replace(/ /g, '').indexOf(sanitisedInput),
      );
    }

    setFoundCountries(prioritiseResults(filterBySearch(allCountries)));
  }

  return (
    <>
      <div className="py-9 text-center">
        <div className="mx-auto flex items-center justify-center">
          <h1 className="pr-6 text-3xl font-extrabold">Find anything</h1>
          <button
            className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-right"
            onClick={() => setSearchIsOpen(true)}
          >
            <span className="sr-only">Search anything</span>
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <Transition appear show={searchIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 bg-slate-900/25 opacity-100 backdrop-blur transition-opacity"
          onClose={() => setSearchIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title> */}
                  <div className="relative w-full max-w-lg scale-100 transform opacity-100 transition-all">
                    <input
                      autoComplete="off"
                      autoCorrect="false"
                      autoFocus
                      type="search"
                      placeholder="Find anything..."
                      className="w-full rounded-xl bg-transparent px-6 py-3 outline-none"
                      value={searchTerm}
                      onChange={handleChange}
                    />
                    <FoundContainer results={foundCountries} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Dialog open={searchIsOpen} onClose={() => setSearchIsOpen(false)}>
        asdf
      </Dialog>
      {/* {searchIsOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24">
          <div
            className="fixed inset-0 bg-slate-900/25 opacity-100 backdrop-blur transition-opacity"
            onClick={() => setSearchIsOpen(false)}
          >
            <div className="relative w-full max-w-lg scale-100 transform px-4 opacity-100 transition-all">
              <input
                autoComplete="off"
                autoCorrect="false"
                autoFocus
                type="search"
                className="mb-3 rounded-xl border border-slate-500 bg-slate-900 px-6 py-3"
                value={searchTerm}
                onChange={handleChange}
              />
              <FoundContainer results={foundCountries} />
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
