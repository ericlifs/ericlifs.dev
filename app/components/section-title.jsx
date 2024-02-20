export default function SectionTitle({ title }) {
	return (
		<h2 className="font-display text-center w-full tracking-tight mb-16 text-white md:text-lg lg:text-2xl uppercase tracking-wide select-none before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:h-px before:bg-zinc-700 relative">
			<span className="bg-black z-10 relative px-3">{title}</span>
		</h2>
	);
}
