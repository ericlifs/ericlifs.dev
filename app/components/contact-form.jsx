"use client";

import { GlowCapture, Glow } from "@codaworks/react-glow";
import { ChevronRightIcon } from "@primer/octicons-react";

import data from "../../data.json";

export default function ContactForm() {
	return (
		<GlowCapture>
			<Glow color="rgb(217 119 6)">
				<form
					action={`https://formspree.io/f/${data.contact.form.formId}`}
					className="w-full space-y-4 flex flex-col items-center"
					method="POST"
				>
					<div className="w-full">
						<label className="sr-only" htmlFor="name">
							Name
						</label>
						<input
							className="w-full rounded-xl p-3 text-base outline-none border text-white bg-black border-zinc-600 focus:border-zinc-600 transition ease font-display glow:border-glow glow:ring-glow glow:bg-glow/[.1]"
							placeholder="Name"
							type="text"
							id="name"
							name="name"
							required
						/>
					</div>

					<div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label className="sr-only" htmlFor="email">
								Email
							</label>
							<input
								className="w-full rounded-xl p-3 text-base outline-none border text-white bg-black border-zinc-600 focus:border-zinc-600 transition ease font-display glow:border-glow glow:ring-glow glow:bg-glow/[.1]"
								placeholder="Email"
								type="email"
								id="email"
								name="email"
								required
							/>
						</div>

						<div className="w-full">
							<label className="sr-only" htmlFor="phone">
								Phone
							</label>
							<input
								className="w-full rounded-xl p-3 text-base outline-none border text-white bg-black border-zinc-600 focus:border-zinc-600 transition ease font-display glow:border-glow glow:ring-glow glow:bg-glow/[.1]"
								placeholder="Phone"
								type="tel"
								id="phone"
								name="phone"
								required
							/>
						</div>
					</div>

					<div className="w-full">
						<label className="sr-only" htmlFor="message">
							Message
						</label>
						<textarea
							className="w-full h-32 rounded-xl p-3 text-base outline-none border text-white bg-black border-zinc-600 focus:border-zinc-600 transition ease font-display glow:border-glow glow:ring-glow glow:bg-glow/[.1]"
							placeholder="Message"
							id="message"
							name="message"
							required
						/>
					</div>

					<button
						type="submit"
						className="flex items-center justify-center rounded-xl px-10 py-3 text-white font-display border border-zinc-600 glow:border-glow glow:ring-glow glow:bg-glow/[.15]"
					>
						<span className="font-medium text-base">Send</span>

						<ChevronRightIcon size={20} />
					</button>
				</form>
			</Glow>
		</GlowCapture>
	);
}
