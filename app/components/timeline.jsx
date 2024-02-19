import tailshake from "tailshake";

export const Timeline = ({ children, title }) => {
	return (
		<div className="w-full mb-16">
			<h2 className="font-display text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
				{title}
			</h2>

			{children}
		</div>
	);
};

export const TimelineEvent = ({ active, children, last, className }) => {
	return (
		<div
			className={tailshake(
				"w-full flex justify-start border-l gap-6",
				last ? "!border-l-transparent" : "pb-16 !border-l-zinc-400",
				className,
			)}
		>
			<div className="relative">
				<div
					className={tailshake(
						"absolute rounded-full aspect-square outline-black",
						active
							? "bg-primary left-[-8.5px] w-4 h-4"
							: "bg-zinc-400 w-3 h-3 left-[-6.5px]",
					)}
				>
					{active && (
						<div
							className={tailshake(
								"absolute top-0 left-0 rounded-full -z-10 w-4 h-4 bg-primary animate-ping aspect-square",
							)}
						/>
					)}
				</div>
			</div>
			<div className="mt-[-4px] flex flex-col gap-6">{children}</div>
		</div>
	);
};

const TimelineEventTitle = ({ children }) => (
	<p className="text-xs text-zinc-400 flex flex-col items-start">{children}</p>
);

const TimelineEventDescription = ({ children }) => (
	<p className="text-base text-white">{children}</p>
);

TimelineEvent.Title = TimelineEventTitle;

TimelineEvent.Description = TimelineEventDescription;
