"use client";

import { GlowCapture } from "@codaworks/react-glow";
import Link from "next/link";
import Image from "next/image";

import data from "../../data.json";

import SectionTitle from "./section-title";
import Card from "./card";

export default function SideProjects() {
	return (
		<GlowCapture>
			<SectionTitle title="Side Projects" />
			<div className="grid w-full grid-cols-1 gap-8 mx-auto md:grid-cols-3 lg:gap-4">
				{data["side-projects"].map((card) => (
					<Card key={card.id}>
						<Link
							href={card.link}
							target="_blank"
							className="relative flex flex-col gap-4 md:gap-6 duration-700 group/card p-4 sm:p-8 lg:p-4"
						>
							<span className="font-display text-white">{card.name}</span>

							<span className="text-sm transition-all duration-150 text-zinc-200 group-hover/card:text-white font-display">
								{card.description}
							</span>

							<div className="gap-x-5 gap-y-4 flex text-neutral-950 flex-wrap">
								{card.stack.map((tech) => (
									<span className="group/stack relative">
										<Image
											key={tech}
											src={`stack/${tech}.svg`}
											width={24}
											height={24}
										/>
										<div className="bg-black absolute left-1/2 -translate-x-1/2 -bottom-10 z-10 hidden border rounded-xl border-zinc-800 text-white text-md py-1 px-2 font-display whitespace-nowrap group-hover/stack:block triangle">
											{tech}
										</div>
									</span>
								))}
							</div>
						</Link>
					</Card>
				))}
			</div>
		</GlowCapture>
	);
}
