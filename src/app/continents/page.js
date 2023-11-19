import { getAllContinents } from '@/utils/continents';
import Link from 'next/link';

export default function ContinentsPage() {
  const allContinents = getAllContinents();

  return (
    <main className="mx-auto max-w-3xl">
      {/* <h1 className="text-center mx-auto flex justify-start items-en">
        Continents
      </h1> */}

      <ul className="flex gap-1">
        {allContinents.map((x) => (
          <li key={`continent-${x.code}`}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl transition-all hover:shadow-2xl">
              <Link
                href={`/x/${x.code}`}
                className="block p-3 text-lg tracking-tight"
              >
                {x.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const metadata = {
  title: 'Continents Page',
};
