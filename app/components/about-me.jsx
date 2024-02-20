import SectionTitle from "./section-title";
import Pill from "./pill";

import data from "../../data.json";

export default function AboutMe() {
	return (
		<main className="space-y-10">
			<SectionTitle title="About me" />

			<article className="space-y-5">
				{data.about.map((paragraph, index) => (
					<p
						key={index}
						className="text-white font-display text-md tracking-wide leading-7"
					>
						{paragraph}
					</p>
				))}
			</article>

			<article className="space-y-5">
				{Object.keys(data.stack).map((tech) => (
					<div className="space-y-4" key={tech}>
						<label className="text-white font-display uppercase text-md">
							{data.stack[tech].title}
						</label>

						<div className="flex space-x-4 overflow-x-scroll max-sm:pb-4">
							{data.stack[tech].pills.map((pill) => (
								<Pill key={pill}>{pill}</Pill>
							))}
						</div>
					</div>
				))}
			</article>
		</main>
	);
}
