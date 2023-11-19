import { getAllContinents } from '@/utils/continents';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl py-9">
      <h1 className="text-2xl font-extrabold">whereinthe</h1>

      <ul>
        {getAllContinents().map((x) => (
          <li>
            <Link href={`/x/${x.code}`} className="hover:underline">
              {x.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
