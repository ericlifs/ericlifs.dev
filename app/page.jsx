import Link from "next/link";
import Image from "next/image";

import data from "../data.json";

import * as scrollAnimation from "./animations/scroll.json";
import TypeAnimation from "./components/type-animation";
import ContactCards from "./components/contact-cards";
import ContactForm from "./components/contact-form";
import WorkExperience from "./components/work-experience";
import LottieAnimation from "./components/lottie-animation";

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden p-5 relative">
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

				<h1 className="flex flex-col-reverse space-y-4 md:space-y-0 md:flex-row items-center z-10 text-6xl md:text-9xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text bg-white">
					{data.username}
					<Image
						alt="👨‍💻"
						width={100}
						height={100}
						src="/profile.png"
						className="rounded-full h-24 w-24 object-cover ml-6 mb-4 md:mb-0 md:mt-4"
					/>
				</h1>

				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

				<div className="my-16 text-center animate-fade-in space-y-2 text-2xl md:text-3xl">
					<h2 className="text-zinc-500 font-display">{data.subheading}</h2>
					<TypeAnimation />
				</div>

				<div className="absolute bottom-12 cursor-default">
					<LottieAnimation animationData={scrollAnimation} width={80} />
				</div>
			</div>

			<div className="mx-auto w-full max-lg:px-5 lg:max-w-5xl space-y-20">
				<WorkExperience />
				<ContactCards />
				<ContactForm />
			</div>
		</>
	);
}
