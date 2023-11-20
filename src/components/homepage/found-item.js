import Link from 'next/link';

export default function FoundItem({ data = {} }) {
  return (
    <div className="p-3">
      <Link
        href={`/x/${data.continent}/${data.code}`}
        className="hover:underline"
      >
        {data.name}
      </Link>
    </div>
  );
}
