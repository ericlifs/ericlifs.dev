"use client";

import { Glow } from "@codaworks/react-glow";

export default function Card({ children }) {
	return (
		<Glow color="rgb(217 119 6)">
			<div className="group md:gap-8 hover:border-zinc-400/50 border border-zinc-600 rounded-xl px-5 py-4 flex-1 flex-col select-none glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
				<div className="pointer-events-none">
					<div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				</div>

				{children}
			</div>
		</Glow>
	);
}
