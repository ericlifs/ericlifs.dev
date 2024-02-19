"use client";

import { useMemo } from "react";
import { TypeAnimation as Animation } from "react-type-animation";

import data from "../../data.json";

export default function TypeAnimation() {
	const sequence = useMemo(
		() =>
			data.hobbies.reduce((accum, current) => [...accum, current, 4000], []),
		[],
	);

	return (
		<Animation
			cursor
			sequence={sequence}
			repeat={Infinity}
			wrapper="p"
			className="font-display text-primary"
		/>
	);
}
