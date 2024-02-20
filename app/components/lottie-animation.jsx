"use client";

import Lottie from "react-lottie";

export default function LottieAnimation({ animationData, width, height }) {
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
