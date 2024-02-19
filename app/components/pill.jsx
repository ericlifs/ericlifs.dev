export default function Pill({ children }) {
	return (
		<label className="bg-zinc-400 select-none py-1 px-2 rounded-md text-sm uppercase font-display">
			{children}
		</label>
	);
}
