import FoundItem from "./found-item";

export default function FoundContainer({ results = [] }) {
    return (
        <div className="h-[100px] relative">

        <div className="border border-slate-500 bg-slate-900 max-h-[400px] overflow-y-scroll absolute w-full top-0 left-0 right-0 max-w-[400px] mx-auto rounded-xl slate-900 p-3">
            {results.map((x) => (
                <FoundItem data={x} />
                ))}

        </div>
                </div>
    )
}