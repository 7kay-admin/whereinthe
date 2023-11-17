import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Oops!</h2>
      <p>This page could not be found.</p>
      <Link href="/">Return home</Link>
    </div>
  );
}
