"use client";

import { MarkGithubIcon, MailIcon } from "@primer/octicons-react";
import { GlowCapture } from "@codaworks/react-glow";
import Link from "next/link";

import data from "../../data.json";

import SectionTitle from "./section-title";
import LinkedinIcon from "./linkedin-icon";
import Card from "./card";

const ICONS = {
	mail: <MailIcon size={20} />,
	linkedin: <LinkedinIcon size={20} />,
	github: <MarkGithubIcon size={20} />,
};

export default function ContactCards() {
	return (
		<GlowCapture>
			<SectionTitle title="Contact me" />
			<div className="grid w-full grid-cols-1 gap-8 mx-auto md:grid-cols-3 lg:gap-4">
				{data.contact.cards.map((card) => (
					<Card key={card.id}>
						<Link
							href={card.link}
							target="_blank"
							className="relative flex flex-col gap-4 md:gap-6 duration-700 group p-4"
						>
							<span className="flex items-center gap-x-4 flex-wrap">
								<span className="text-zinc-200 group-hover:text-white mt-1">
									{ICONS[card.id]}
								</span>

								<span className="truncate text-xl duration-150 text-zinc-200 group-hover:text-white font-display">
									{card.value}
								</span>
							</span>
						</Link>
					</Card>
				))}
			</div>
		</GlowCapture>
	);
}
