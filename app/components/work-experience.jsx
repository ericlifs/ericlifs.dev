"use client";

import Link from "next/link";
import Image from "next/image";

import { Timeline, TimelineEvent } from "./timeline";
import Pill from "./pill";
import Collapsible from "./collapsible";

import data from "../../data.json";

export default function WorkExperience() {
	return (
		<Timeline title="Work experience (most relevant)">
			<Collapsible items={data.work}>
				{(works) =>
					works.map((work, index) => (
						<TimelineEvent
							key={work.id}
							active={index === 0}
							last={works.length > 1 && index === works.length - 1}
							className={works === 1 ? "!border-none" : ""}
						>
							<TimelineEvent.Title>
								<Link href={work.link} className="w-auto" target="_blank">
									<Image
										alt={work.id}
										src={work.image.src}
										width={work.image.width || 91}
										height={32}
									/>
									<span className="font-display mt-4">{work.role}</span>
								</Link>
							</TimelineEvent.Title>

							{Boolean(work.description) && (
								<TimelineEvent.Description>
									{work.description}
								</TimelineEvent.Description>
							)}

							<div className="flex space-x-4 overflow-x-scroll max-sm:pb-4">
								{work.pills.map((pill) => (
									<Pill key={pill}>{pill}</Pill>
								))}
							</div>
						</TimelineEvent>
					))
				}
			</Collapsible>
		</Timeline>
	);
}
