import Link from "next/link";
import Image from "next/image";

import { Timeline, TimelineEvent } from "./timeline";
import Pill from "./pill";

import data from "../../data.json";

export default function WorkExperience() {
	return (
		<Timeline title="Work experience (most relevant)">
			{data.work.map((work, index) => (
				<TimelineEvent
					active={index === 0}
					last={data.work.length > 1 && index === data.work.length - 1}
					className={data.work.length === 1 ? "!border-none" : ""}
				>
					<TimelineEvent.Title>
						<Link href={work.link} className="w-auto space-y-2" target="_blank">
							<Image
								alt={work.id}
								src={work.image.src}
								width={work.image.width || 91}
								height={32}
							/>
							<span>{work.role}</span>
						</Link>
					</TimelineEvent.Title>

					<TimelineEvent.Description>
						{work.description}
					</TimelineEvent.Description>

					<div className="flex space-x-4 overflow-x-scroll max-sm:pb-4">
						{work.pills.map((pill) => (
							<Pill key={pill}>{pill}</Pill>
						))}
					</div>
				</TimelineEvent>
			))}
		</Timeline>
	);
}
