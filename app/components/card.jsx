"use client";

import { Glow } from "@codaworks/react-glow";
import tailshake from "tailshake";

export default function Card({ children, className }) {
	return (
		<Glow color="rgb(217 119 6)">
			<div
				className={tailshake(
					"group md:gap-8 glow-effect px-5 py-4 flex-1 flex-col select-none",
					className,
				)}
			>
				{children}
			</div>
		</Glow>
	);
}
