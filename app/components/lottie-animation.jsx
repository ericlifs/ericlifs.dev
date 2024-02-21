"use client";

import Lottie from "react-lottie";

import * as animationData from "../animations/scroll.json";

export default function LottieAnimation() {
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
			height={100}
			width={80}
		/>
	);
}
