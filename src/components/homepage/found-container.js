import FoundItem from './found-item';

export default function FoundContainer({ results = [] }) {
  return (
    <div className="relative">
      <div className="mx-auto max-h-[400px] w-full max-w-[400px] overflow-y-scroll">
        {results.map((x) => (
          <FoundItem data={x} />
        ))}
      </div>
    </div>
  );
}
