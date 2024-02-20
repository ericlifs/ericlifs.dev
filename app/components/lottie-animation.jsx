"use client";

import Lottie from "react-lottie";

import * as animationData from "../animations/scroll.json";

export default function LottieAnimation({ animationData, width = 80, height }) {
	return (
		<Lottie
			ariaRole=""
			options={{
				loop: true,
				autoplay: true,
				animationData,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			}}
			height={height}
			width={width}
		/>
	);
}
