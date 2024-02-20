import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import tailshake from "tailshake";

import "../global.css";

import data from "../data.json";

/** @type {import('next').Metadata} */
export const metadata = {
	title: data.username,
	description: `Portfolio for ${data.username}`,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: [
		{
			url: "/favicon.ico",
			rel: "icon",
			sizes: "any",
			type: "image/svg+xml",
		},
	],
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={tailshake(
				"bg-black",
				[inter.variable, calSans.variable].join(" "),
			)}
		>
			<body className="bg-gradient-to-tl from-black via-zinc-700/20 pb-20 to-black">
				<Analytics />
				{children}
			</body>
		</html>
	);
}
