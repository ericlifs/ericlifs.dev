"use client";

import { Glow } from "@codaworks/react-glow";

export default function Card({ children }) {
	return (
		<Glow color="rgb(217 119 6)">
			<div className="group md:gap-8 glow-effect px-5 py-4 flex-1 flex-col select-none">
				{children}
			</div>
		</Glow>
	);
}
