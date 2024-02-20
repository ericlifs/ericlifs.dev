"use client";

import { MarkGithubIcon, MailIcon, LinkIcon } from "@primer/octicons-react";
import { GlowCapture } from "@codaworks/react-glow";
import Link from "next/link";

import data from "../../data.json";

import SectionTitle from "./section-title";
import Card from "./card";

const ICONS = {
	mail: <MailIcon size={20} />,
	linkedin: <LinkIcon size={20} />,
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
							className="relative flex flex-col gap-4 md:gap-6 duration-700 group p-4 sm:p-8 lg:p-4"
						>
							<span className="flex items-center space-x-4">
								<span className="w-12 h-12 text-zinc-200 group-hover:text-white border border-border glow:border-glow glow:ring-glow rounded-full p-3">
									{ICONS[card.id]}
								</span>
								<span className="font-display text-white">{card.label}</span>
							</span>

							<span className="whitespace-nowrap text-xl duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
								{card.value}
							</span>
						</Link>
					</Card>
				))}
			</div>
		</GlowCapture>
	);
}
