import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-600 py-6">
      <div className="max-w-3xl mx-auto">
        <span className="tracking-widest"><Link href='/'>
        whereinthe</Link></span>
      </div>
    </header>
  );
}
