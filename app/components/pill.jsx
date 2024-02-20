export default function Pill({ children }) {
	if (!children) {
		return null;
	}

	return (
		<label className="bg-zinc-400 select-none py-1 px-2 rounded-md text-sm uppercase font-display whitespace-nowrap">
			{children}
		</label>
	);
}
