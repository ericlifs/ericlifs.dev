import Link from "next/link";
import Image from "next/image";

import { Timeline, TimelineEvent } from "./timeline";
import Pill from "./pill";

import data from "../../data.json";

export default function WorkExperience() {
	return (
		<Timeline title="Work experience">
			{data.work.map((work, index) => (
				<TimelineEvent
					active={index === 0}
					last={data.work.length > 1 && index === data.work.length - 1}
					className={data.work.length === 1 ? "!border-none" : ""}
				>
					<TimelineEvent.Title>
						<Link href={work.link} className="w-auto" target="_blank">
							<Image src={work.image} alt={work.id} width={91} height={32} />
							{work.role}
						</Link>
					</TimelineEvent.Title>

					<TimelineEvent.Description>
						{work.description}
					</TimelineEvent.Description>

					<div className="flex space-x-4">
						{work.pills.map((pill) => (
							<Pill key={pill}>{pill}</Pill>
						))}
					</div>
				</TimelineEvent>
			))}
		</Timeline>
	);
}
