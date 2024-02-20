"use client";

import { GlowCapture, Glow } from "@codaworks/react-glow";
import { useState } from "react";

const CLOSED_ITEMS_COUNT = 4;

export default function Collapsible({ children, items }) {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => setExpanded((prevExpanded) => !prevExpanded);

	const moreItemsCount = items.length - 1 - CLOSED_ITEMS_COUNT;

	if (moreItemsCount <= 0) {
		return children(items);
	}

	return (
		<GlowCapture>
			{children(
				items.slice(0, expanded ? items.length - 1 : CLOSED_ITEMS_COUNT),
			)}

			<Glow color="rgb(217 119 6)" className="flex justify-center">
				<button
					onClick={toggleExpanded}
					type="button"
					className="flex mt-10 items-center justify-center rounded-xl px-10 py-3 text-white font-display border border-zinc-600 glow:border-glow glow:ring-glow glow:bg-glow/[.15]"
				>
					<span className="font-medium text-base">
						Show {expanded ? "less" : `${moreItemsCount} more`}
					</span>
				</button>
			</Glow>
		</GlowCapture>
	);
}
