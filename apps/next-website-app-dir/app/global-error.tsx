"use client";

import Image from "next/image";
import { Button } from "ui/react";

/** Global error page */
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
	return (
		<html>
			<body>
				<section className="flex w-full flex-col items-center justify-center px-4 pb-20 pt-10">
					<div className="prose flex flex-col items-center text-center">
						<Image
							src={"/error.gif"}
							alt="Error"
							width={500}
							height={500}
							className="m-0 h-80 object-contain"
						/>
						<h1>Something went wrong! - {error.message}</h1>
						<Button ariaLabel="try again" variant="primary" onClick={() => reset()}>
							Try again
						</Button>
					</div>
				</section>
			</body>
		</html>
	);
}
